// src/App.js
import React, { useState } from 'react';
import { ErrorBoundary } from './components/layout/ErrorBoundary.js';
import { GNB } from './components/layout/GNB.js';
import { PromptBox } from './components/article/PromptBox.js';
import { ArticleBox } from './components/article/ArticleBox.js';
import { SpellCheckResult } from './components/results/SpellCheckResults.js';
import { CopyWashingResult } from './components/results/CopyWashingResult.js';
import { SpellCheckService } from './services/spellCheckService.js';
import { CopyGenerationService } from './services/copyGenerationService.js';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [articleText, setArticleText] = useState('');
  const [spellCheckResults, setSpellCheckResults] = useState([]);
  const [generatedResults, setGeneratedResults] = useState([
    '(AI가 생성한 카피라이팅 문장이 이곳에 표시됩니다)',
    '',
    '',
    ''
  ]);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      // 맞춤법 검사
      const spellResults = await SpellCheckService.check(articleText);
      setSpellCheckResults(spellResults);

      // AI 카피 생성
      const copyResults = await CopyGenerationService.generate(promptText, articleText);
      setGeneratedResults(copyResults);
    } catch (error) {
      console.error('Error:', error);
      // TODO: 에러 처리 (토스트 메시지 등)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <GNB />
        <div className="pt-[60px]">
          <div className="max-w-[1440px] mx-auto px-4 py-4 flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-[802px] space-y-4">
              <PromptBox 
                value={promptText}
                onChange={setPromptText}
              />
              <ArticleBox
                value={articleText}
                onChange={setArticleText}
                onGenerate={handleGenerate}
                isLoading={isLoading}
              />
            </div>
            <div className="w-full lg:w-[571px] space-y-4">
              <SpellCheckResult results={spellCheckResults} />
              <CopyWashingResult
                results={generatedResults}
                onRegenerate={handleGenerate}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;