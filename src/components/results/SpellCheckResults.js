import React from 'react';
import PropTypes from 'prop-types';

export const SpellCheckResult = ({ results = [] }) => (
  <div className="w-full h-[499px] bg-[#eaeaea] rounded-[31px] relative border-2 border-[#41558a]/10">
    <div className="absolute top-3 left-3">
      <div className="bg-white border-2 border-[#41558a] rounded-[11px] px-4 py-2">
        <span className="text-black text-xl font-semibold">
          Spell Check Result
        </span>
      </div>
    </div>
    
    <div className="mt-16 mx-6 p-6 overflow-y-auto h-[400px] bg-white/80 rounded-lg border border-[#41558a]/20">
      {results.length === 0 ? (
        <p className="text-center text-black text-xl">
          맞춤법 검사 결과가 여기에 표시됩니다.
        </p>
      ) : (
        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 bg-white rounded border border-[#41558a]/10">
              <span className={`text-lg ${result.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {result.isCorrect ? '✓' : '✗'}
              </span>
              <div className="flex-1">
                <p className="text-lg text-black">
                  <span className="line-through text-red-600">{result.original}</span>
                  {' → '}
                  <span className="text-green-600">{result.corrected}</span>
                </p>
                <p className="text-sm text-black">라인 {result.line}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

SpellCheckResult.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string,
      corrected: PropTypes.string,
      line: PropTypes.number,
      isCorrect: PropTypes.bool
    })
  )
};