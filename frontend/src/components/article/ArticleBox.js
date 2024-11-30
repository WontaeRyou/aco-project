import React from 'react';
import PropTypes from 'prop-types';
import { TextArea } from '../common/TextArea';
import { Button } from '../common/Button';
import { FileUploadBox } from './FileUploadBox';

export const ArticleBox = ({ value, onChange, onGenerate, isLoading }) => (
  <div className="w-full h-[582px] bg-[#ebebf6] rounded-[31px] p-8 relative border-2 border-[#41558a]/10">
    <div className="bg-white rounded-lg border-2 border-[#41558a]/20 p-4">
      <TextArea
        value={value}
        onChange={onChange}
        placeholder="Copy and paste your article..."
        className="h-[200px] text-xl"
      />
    </div>
    <FileUploadBox />
    <Button
      onClick={onGenerate}
      isLoading={isLoading}
      className="absolute left-[268px] top-[497.12px] w-[270px] h-[54.56px] rounded-[14px] text-[32px] font-semibold"
    >
      Generate
    </Button>
  </div>
);

ArticleBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onGenerate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};