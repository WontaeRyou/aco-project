// src/constants/config.js
export const FILE_TYPES = {
    DOCX: '.docx',
    PDF: '.pdf'
  };
  
  export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  
  export const API_ENDPOINTS = {
    SPELL_CHECK: '/api/spell-check',
    GENERATE_COPY: '/api/generate-copy'
  };
  
  export const ERROR_MESSAGES = {
    FILE_SIZE: '파일 크기가 너무 큽니다. (최대 5MB)',
    FILE_TYPE: '지원하지 않는 파일 형식입니다. (docx, pdf 파일만 가능)',
    NETWORK: '네트워크 오류가 발생했습니다. 다시 시도해 주세요.',
    UNKNOWN: '알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.'
  };
  
  export const UI_CONSTANTS = {
    BUTTON_TEXTS: {
      GENERATE: 'Generate',
      REGENERATE: 'Regenerate',
      COPY: '복사',
      UPLOAD: '업로드'
    },
    PLACEHOLDERS: {
      PROMPT: '여기에 입력하세요...',
      ARTICLE: 'Copy and paste your article...',
      SPELL_CHECK: '맞춤법 검사 결과가 여기에 표시됩니다.',
      GENERATED_COPY: '(AI가 생성한 카피라이팅 문장이 이곳에 표시됩니다)'
    }
  };