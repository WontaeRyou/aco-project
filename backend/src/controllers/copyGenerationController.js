// backend/src/controllers/copyGenerationController.js
import { OpenAIService } from '../services/openaiService.js';

export class CopyGenerationController {
  static async generate(req, res, next) {
    try {
      const { promptData, articleText } = req.body;
      const result = await OpenAIService.generateCopy(promptData, articleText);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}