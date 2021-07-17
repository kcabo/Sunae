import React from 'react';
import Picker from './Picker';
import Actions from './Actions';

const Settings: React.VFC = () => {
  return (
    <div
      className='w-full mx-auto h-full p-10 bg-white rounded-xl 
        backdrop-blur-xl bg-opacity-25 border border-white border-opacity-80 drop-shadow-2xl
        flex flex-col justify-between'
    >
      <div>
        <Picker />
        <Picker />
      </div>
      <Actions />
    </div>
  );
};

export default Settings;
