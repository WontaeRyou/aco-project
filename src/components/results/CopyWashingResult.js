import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../common/Button';
import { copyToClipboard } from '../../utils/clipboard';

export const CopyWashingResult = ({ results, onRegenerate, isLoading }) => (
  <div className="w-full h-[406px] bg-[#d9d9d9] rounded-[31px] relative border-2 border-[#41558a]/10">
    <div className="absolute top-3 left-3">
      <div className="bg-white border-2 border-[#41558a] rounded-[11px] px-4 py-2">
        <span className="text-black text-xl font-semibold">
          AI Copywashing
        </span>
      </div>
    </div>

    <div className="mt-20 px-6 space-y-4">
      {results.map((result, index) => (
        <div key={index} className="flex gap-4">
          <div className="w-14 h-[50px] bg-white border-2 border-[#41558a]/30 flex items-center justify-center rounded">
            <span className="text-xl text-black">{index + 1}</span>
          </div>
          <div className="flex-1 h-[50px] bg-white border-2 border-[#41558a]/30 p-2 rounded">
            <p className="text-xl font-normal truncate text-black">{result}</p>
          </div>
          <button
            onClick={() => copyToClipboard(result)}
            className="w-9 h-[38px] flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
          >
            <span role="img" aria-label="copy" className="text-xl">📋</span>
          </button>
        </div>
      ))}
    </div>

    <Button
      onClick={onRegenerate}
      isLoading={isLoading}
      className="absolute left-[151px] top-[322.38px] w-[270px] h-[54px] rounded-[23px] text-[32px] font-medium"
    >
      Regenerate
    </Button>
  </div>
);

CopyWashingResult.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRegenerate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};