import React, { useState } from 'react';

type PickerProps = {
  label: string;
  labelEn: string;
};

const Picker: React.VFC<PickerProps> = ({ label, labelEn }) => {
  const [color, setColor] = useState('#4b5563');

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setColor(target.value);
    console.log(color);
  };

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
          onChange={handleColorChange}
        ></input>
        <datalist id='candidates'>
          <option value='#ddd2aa'></option>
          <option value='#ffe3d5'></option>
          <option value='#d4ecad'></option>
          <option value='#ddeaf6'></option>
          <option value='#5888bd'></option>
          <option value='#cdbbd3'></option>
        </datalist>
      </div>
    </div>
  );
};

export default Picker;
