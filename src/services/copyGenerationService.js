// src/services/copyGenerationService.js - 지금 단계에서는 copygeneration을 위한 api. 키 ㄱ
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export class CopyGenerationService {
  static async generate(prompt, article) {
    try {
      const response = await fetch(`${API_URL}/api/generate-copy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          promptData: prompt,
          articleText: article 
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate copy');
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error);
      }

      return data.variations;
    } catch (error) {
      console.error('Copy Generation Error:', error);
      throw error;
    }
  }

  static async regenerate(previousResult) {
    try {
      const response = await fetch(`${API_URL}/api/regenerate-copy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          promptData: previousResult.prompt,
          articleText: previousResult.article,
          regenerate: true
        })
      });

      if (!response.ok) {
        throw new Error('Failed to regenerate copy');
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error);
      }

      return data.variations;
    } catch (error) {
      console.error('Copy Regeneration Error:', error);
      throw error;
    }
  }
}