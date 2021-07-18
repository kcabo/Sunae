import React from 'react';
import logo from '../images/logo-wh-pk-inner.svg';
import github from '../images/github.svg';

const Footer: React.VFC = () => {
  return (
    <div className='w-screen bg-gray-800 bg-opacity-50 flex justify-between fixed bottom-0 px-8 py-3'>
      <p className='text-xl w-6'>Sunae</p>
      <a href='https://github.com/kcabo/Sunae'>
        <img src={github} className='w-8' />
      </a>
      <img src={logo} className='w-6' />
    </div>
  );
};

export default Footer;
