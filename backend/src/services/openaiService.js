// backend/src/services/openaiService.js
import { openai } from '../config/openaiConfig.js';

export class OpenAIService {
  static async generateCopy(promptData, articleText) {
    try {
      const systemPrompt = `
당신은 앱 알림 메시지 작성 전문가입니다. 
다음 가이드라인에 따라 앱 알림 메시지를 생성해주세요:
- 대상: ${promptData.target}
- 목적: ${promptData.purpose}
- 톤앤매너: ${promptData.tone}
- 핵심 키워드: ${promptData.keywords}

원본 텍스트의 핵심 내용을 유지하면서, 앱 알림에 적합한 짧고 매력적인 메시지 4가지 버전을 생성해주세요.
각 메시지는 100자를 넘지 않아야 합니다.`;

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: articleText }
        ],
        temperature: 0.7,
        max_tokens: 500
      });

      return {
        success: true,
        variations: response.choices[0].message.content
          .split('\n')
          .filter(line => line.trim() !== '')
          .map(line => line.replace(/^\d+\.\s*/, ''))
          .slice(0, 4)
      };
    } catch (error) {
      console.error('OpenAI Error:', error);
      throw new Error('Failed to generate copy');
    }
  }
}