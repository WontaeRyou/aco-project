import React from 'react';
import { Cloud } from 'lucide-react';
import { useFileUpload } from '../../hooks/useFileUpload';
import { FILE_TYPES } from '../../constants/config';

export const FileUploadBox = () => {
  const {
    isDragging,
    fileInputRef,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileChange
  } = useFileUpload();

  return (
    <div 
      className={`mt-8 flex flex-col items-center justify-center h-[200px] border-2 ${
        isDragging ? 'border-[#41558a] bg-[#41558a]/5' : 'border-[#41558a]/30 bg-white/50'
      } rounded-lg transition-all duration-200`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Cloud size={64} className="text-[#41558a] mb-4" />
      <p className="text-xl font-normal font-['Pretendard'] text-center text-black">
        Or upload your file (docx, pdf)
      </p>
      <input
        ref={fileInputRef}
        type="file"
        accept={Object.values(FILE_TYPES).join(',')}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};