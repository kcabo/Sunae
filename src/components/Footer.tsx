import React from 'react';
import logo from '../images/logo-wh-pk-inner.svg';

const Footer: React.VFC = () => {
  return (
    <div className='w-screen bg-gray-800 bg-opacity-50 flex justify-between fixed bottom-0 px-8 py-5'>
      <p className='text-2xl'>Sunae</p>
      <img src={logo} className='w-8' />
    </div>
  );
};

export default Footer;
