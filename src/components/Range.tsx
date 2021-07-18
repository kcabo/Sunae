import React from 'react';

type RangeProps = {
  label: string;
  labelEn: string;
  size: number;
  minSize: number;
  maxSize: number;
  step: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Range: React.VFC<RangeProps> = ({
  label,
  labelEn,
  size,
  minSize,
  maxSize,
  step,
  onChange,
}) => {
  return (
    <div className='flex w-full justify-between h-10'>
      <div className='my-auto'>
        <span className='leading-4 mr-4 text-lg'>{label}</span>
        <span className='hidden lg:inline text-gray-400'>{labelEn}</span>
      </div>

      <div>
        <input
          className='w-20 h-full rounded-none text-gray-600 outline-none bg-transparent'
          type='range'
          value={size}
          min={minSize}
          max={maxSize}
          step={step}
          onChange={onChange}
        ></input>
        <span className='text-xs text-gray-400 leading-4'>{size}</span>
      </div>
    </div>
  );
};

export default Range;
