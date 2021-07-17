import React from 'react';
import Picker from './Picker';

const Settings: React.VFC = () => {
  return (
    <div className='md:w-full w-5/6 mx-auto px-6 py-6 bg-white rounded-xl backdrop-blur-xl bg-opacity-25 border border-white border-opacity-80 drop-shadow-2xl'>
      <Picker />
      <Picker />
      <Picker />
    </div>
  );
};

export default Settings;
