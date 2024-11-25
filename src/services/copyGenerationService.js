// src/services/copyGenerationService.js
import apiService from './api';
import { ErrorHandler } from './errorHandler';

export class CopyGenerationService {
 static async generate(prompt, article) {
   try {
     const response = await apiService.generateCopy(prompt, article);
     
     if (!response.success) {
       throw new Error(response.error);
     }
     
     return response.data;
   } catch (error) {
     throw new Error(ErrorHandler.handle(error));
   }
 }

 static async regenerate(previousResult) {
   try {
     const response = await apiService.generateCopy(
       previousResult.prompt,
       previousResult.article,
       { regenerate: true }
     );
     
     if (!response.success) {
       throw new Error(response.error);
     }
     
     return response.data;
   } catch (error) {
     throw new Error(ErrorHandler.handle(error));
   }
 }
}