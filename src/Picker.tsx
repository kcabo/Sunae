import React, { useState } from 'react';

const Picker: React.VFC = () => {
  const [color, setColor] = useState('#feaafe');

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setColor(target.value);
    console.log(color);
  };

  return (
    <div className='my-4 flex w-full justify-between'>
      <p className='my-auto'>背景色</p>
      <input
        className='w-20 h-12 border-red-500 outline-none rounded-lg'
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
  );
};

export default Picker;
