// src/services/api.js
import { API_ENDPOINTS, ERROR_MESSAGES } from '../constants/config';

class ApiService {
 // 기본 API 호출 메서드
 async fetchData(url, options = {}) {
   try {
     const response = await fetch(url, {
       ...options,
       headers: {
         'Content-Type': 'application/json',
         ...options.headers,
       },
     });

     if (!response.ok) {
       throw new Error(response.statusText);
     }

     const data = await response.json();
     return { success: true, data };
   } catch (error) {
     console.error('API Error:', error);
     return {
       success: false,
       error: ERROR_MESSAGES.NETWORK,
     };
   }
 }

 // 맞춤법 검사 API
 async checkSpelling(text) {
   return this.fetchData(API_ENDPOINTS.SPELL_CHECK, {
     method: 'POST',
     body: JSON.stringify({ text }),
   });
 }

 // AI 카피라이팅 생성 API
 async generateCopy(prompt, article) {
   return this.fetchData(API_ENDPOINTS.GENERATE_COPY, {
     method: 'POST',
     body: JSON.stringify({
       prompt,
       article,
     }),
   });
 }

 // 파일 업로드 API
 async uploadFile(file) {
   const formData = new FormData();
   formData.append('file', file);

   return this.fetchData('/api/upload', {
     method: 'POST',
     headers: {
       // FormData를 사용할 때는 Content-Type을 설정하지 않습니다
       // 브라우저가 자동으로 설정합니다
     },
     body: formData,
   });
 }
}

const apiService = new ApiService();
export default apiService;