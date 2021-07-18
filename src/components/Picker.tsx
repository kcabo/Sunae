import React from 'react';

type PickerProps = {
  label: string;
  labelEn: string;
  color: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Picker: React.VFC<PickerProps> = ({
  label,
  labelEn,
  color,
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
          list='candidates'
          type='color'
          value={color}
          onChange={onChange}
        ></input>
        <datalist id='candidates'>
          <option value='#282C34'></option>
          <option value='#0C0C0C'></option>
          <option value='#002B36'></option>
          <option value='#FFFFFF'></option>
          <option value='#56B6C2'></option>
          <option value='#E06C75'></option>
          <option value='#98C379'></option>
          <option value='#E5C07B'></option>
          <option value='#61AFEF'></option>
          <option value='#C678DD'></option>
        </datalist>
      </div>
    </div>
  );
};

export default Picker;
