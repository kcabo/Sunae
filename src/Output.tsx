import React, { useState } from 'react';
import CodeDialog from './CodeDialog';

const Output: React.VFC = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className='w-full'>
      <button
        className='inline-flex text-white 
      bg-blue-500 border-0 py-2 
      px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'
        onClick={openModal}
      >
        View Code
      </button>
      <CodeDialog isOpen={isOpen} closeModal={closeModal}></CodeDialog>
    </div>
  );
};

export default Output;
