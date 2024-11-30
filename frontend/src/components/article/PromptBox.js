import React from 'react';
import PropTypes from 'prop-types';
import { TextArea } from '../common/TextArea';

export const PromptBox = ({ value, onChange }) => (
  <div className="w-full h-[323px] bg-[#d9d9d9] rounded-[31px] p-8 border-2 border-[#41558a]/10">
    <h2 className="text-black text-2xl font-semibold font-['Pretendard'] mb-4">
      앱알림 생성을 위한 가이드라인을 작성해주세요
    </h2>
    <div className="text-gray-600 text-sm mb-4 space-y-2">
      <p>• 대상: 알림을 받을 사용자층 (예: 20-30대 직장인, 학생 등)</p>
      <p>• 목적: 알림의 주요 목적 (예: 이벤트 안내, 제품 홍보, 서비스 안내 등)</p>
      <p>• 톤앤매너: 원하는 말투 (예: 친근한, 전문적인, 격식있는 등)</p>
      <p>• 핵심 키워드: 반드시 포함되어야 할 단어나 문구</p>
    </div>
    <div className="mt-2 h-[140px] bg-white/80 rounded-lg p-4 border border-[#41558a]/20">
      <TextArea
        value={value}
        onChange={onChange}
        placeholder="예시) 20-30대 직장인을 대상으로, 새로운 금융 상품을 소개하는 앱알림입니다. 전문성있되 친근한 톤으로 작성해주세요. '특별 혜택', '한정 기회' 키워드를 포함해주세요."
        className="h-full bg-transparent text-base"
      />
    </div>
  </div>
);

PromptBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PromptBox;