// backend/src/controllers/copyGenerationController.js
import { OpenAIService } from '../services/openaiService.js';

export class CopyGenerationController {
  static async generate(req, res, next) {
    try {
      const { promptData, articleText } = req.body;
      
      if (!promptData?.text || !articleText) {
        return res.status(400).json({
          success: false,
          error: '필수 입력값이 누락되었습니다.'
        });
      }

      const result = await OpenAIService.generateCopy(promptData, articleText);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}