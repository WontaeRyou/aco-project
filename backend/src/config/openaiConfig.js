// backend/src/config/openaiConfig.js
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();  // 이 줄 추가가 필요할 수 있습니다

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});