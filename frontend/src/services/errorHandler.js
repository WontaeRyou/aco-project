// src/services/errorHandler.js
// src/services/errorHandler.js
import { ERROR_MESSAGES } from '../constants/config.js';

export class ErrorHandler {
    static handle(error) {
      console.error('Error occurred:', error);
      
      if (error.name === 'NetworkError') {
        return ERROR_MESSAGES.NETWORK;
      }
      
      if (error.response) {
        // API 에러 응답 처리
        switch (error.response.status) {
          case 400:
            return '잘못된 요청입니다.';
          case 401:
            return '인증이 필요합니다.';
          case 403:
            return '접근 권한이 없습니다.';
          case 404:
            return '요청하신 리소스를 찾을 수 없습니다.';
          case 429:
            return '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.';
          case 500:
            return '서버 오류가 발생했습니다.';
          default:
            return ERROR_MESSAGES.UNKNOWN;
        }
      }
      
      return ERROR_MESSAGES.UNKNOWN;
    }
   }