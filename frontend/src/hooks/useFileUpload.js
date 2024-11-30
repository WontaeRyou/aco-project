// src/hooks/useFileUpload.js
import { useState, useRef } from 'react';
import { FILE_TYPES, MAX_FILE_SIZE } from '../constants/config';

export const useFileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const file = files[0];
    if (!file) return;

    // 파일 타입 체크
    const isValidType = Object.values(FILE_TYPES).some(type => 
      file.name.toLowerCase().endsWith(type)
    );

    if (!isValidType) {
      alert('지원하지 않는 파일 형식입니다. (docx, pdf 파일만 가능)');
      return;
    }

    // 파일 크기 체크
    if (file.size > MAX_FILE_SIZE) {
      alert('파일 크기가 너무 큽니다. (최대 5MB)');
      return;
    }

    // TODO: 파일 처리 로직 추가
    console.log('File processed:', file);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  return {
    isDragging,
    fileInputRef,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileChange
  };
};