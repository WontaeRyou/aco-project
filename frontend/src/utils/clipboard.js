// src/utils/clipboard.js
export const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // TODO: 복사 성공 토스트 메시지 표시
    } catch (err) {
      console.error('Failed to copy:', err);
      // TODO: 복사 실패 토스트 메시지 표시
    }
  };