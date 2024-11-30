// src/App.js
import React, { useState } from 'react';
import { ErrorBoundary } from './components/layout/ErrorBoundary.js';
import { GNB } from './components/layout/GNB.js';
import { PromptBox } from './components/article/PromptBox.js';
import { ArticleBox } from './components/article/ArticleBox.js';
import { SpellCheckResult } from './components/results/SpellCheckResults.js';
import { CopyWashingResult } from './components/results/CopyWashingResult.js';

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
    if (!promptText.trim() || !articleText.trim()) {
      console.error('입력 텍스트를 확인해주세요.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/generate-copy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          promptData: {
            text: promptText,
            article: articleText
          }
        })
      });

      if (!response.ok) {
        throw new Error('API 요청에 실패했습니다.');
      }

      const data = await response.json();
      if (data.success) {
        setSpellCheckResults(data.spellCheck || []);
        setGeneratedResults(data.variations || [
          '응답을 처리하는 중 오류가 발생했습니다.',
          '',
          '',
          ''
        ]);
      } else {
        throw new Error(data.error || '알 수 없는 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSpellCheckResults([]);
      setGeneratedResults([
        '오류가 발생했습니다. 다시 시도해주세요.',
        '',
        '',
        ''
      ]);
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