// src/types/index.ts
export interface SpellCheckResult {
    original: string;
    corrected: string;
    line: number;
    isCorrect: boolean;
  }
  
  export interface GeneratedResult {
    id: number;
    text: string;
  }
  
  export interface FileUploadProps {
    onFileSelect: (file: File) => void;
    accept?: string[];
    maxSize?: number;
  }
  
  export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
  }