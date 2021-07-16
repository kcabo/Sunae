import React from 'react';
import Picker from './Picker';

const Settings: React.VFC = () => {
  return (
    <div className='md:w-full w-5/6 mx-auto px-4 bg-gray-100 rounded text-black'>
      <Picker />
      <Picker />
      <Picker />
    </div>
  );
};

export default Settings;
