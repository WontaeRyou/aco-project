import React from 'react';
import PropTypes from 'prop-types';
import { TextArea } from '../common/TextArea';

export const PromptBox = ({ value, onChange }) => (
  <div className="w-full h-[323px] bg-[#d9d9d9] rounded-[31px] p-8 border-2 border-[#41558a]/10">
    <h2 className="text-black text-2xl font-semibold font-['Pretendard']">
      당신의 앱알림을 보내고 싶은 대상, 알림의 목적 등을 소개해주세요.
    </h2>
    <div className="mt-4 h-[200px] bg-white/80 rounded-lg p-4 border border-[#41558a]/20">
      <TextArea
        value={value}
        onChange={onChange}
        placeholder="여기에 입력하세요..."
        className="h-full bg-transparent text-xl"
      />
    </div>
  </div>
);

PromptBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};