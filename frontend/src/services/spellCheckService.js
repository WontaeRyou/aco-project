// src/services/spellCheckService.js
import apiService from './api';
import { ErrorHandler } from './errorHandler';

export class SpellCheckService {
 static async check(text) {
   try {
     const response = await apiService.checkSpelling(text);
     
     if (!response.success) {
       throw new Error(response.error);
     }
     
     return response.data;
   } catch (error) {
     throw new Error(ErrorHandler.handle(error));
   }
 }
}
