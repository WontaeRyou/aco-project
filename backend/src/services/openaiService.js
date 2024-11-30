// backend/src/services/openaiService.js
import { openai } from '../config/openaiConfig.js';

export class OpenAIService {
  static async generateCopy(promptData, articleText) {
    try {
      const systemPrompt = `
당신은 앱 알림 메시지 작성과 맞춤법 교정을 전문으로 하는 AI입니다.
주어진 텍스트를 분석하여:
1. 맞춤법 오류를 찾아 수정하고
2. 효과적인 앱 알림 메시지를 생성해주세요.

대상: ${promptData.text}
텍스트 분석 시 다음 사항을 고려해주세요:
- 맞춤법과 문법 오류 검사
- 명확하고 간결한 메시지 생성
- 각 메시지는 100자 이내로 제한`;

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: articleText }
        ],
        temperature: 0.7,
        max_tokens: 1000
      });

      const content = response.choices[0].message.content;
      const sections = content.split('\n\n');
      
      // 맞춤법 검사 결과와 생성된 메시지 분리
      const spellCheck = [];
      const variations = [];
      
      sections.forEach(section => {
        if (section.includes('맞춤법')) {
          const corrections = section.split('\n')
            .filter(line => line.includes('→'))
            .map(line => {
              const [original, corrected] = line.split('→').map(s => s.trim());
              return { original, corrected, isCorrect: original === corrected };
            });
          spellCheck.push(...corrections);
        } else if (section.match(/^\d\./m)) {
          const messages = section.split('\n')
            .filter(line => line.match(/^\d\./))
            .map(line => line.replace(/^\d\.\s*/, '').trim());
          variations.push(...messages);
        }
      });

      return {
        success: true,
        spellCheck,
        variations: variations.slice(0, 4)
      };
    } catch (error) {
      console.error('OpenAI Error:', error);
      throw new Error('AI 응답 생성 중 오류가 발생했습니다.');
    }
  }
}