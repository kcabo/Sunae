import React, { useState } from 'react';
import OpenMemoButton from './OpenMemoButton';
import ViewCodeButton from './ViewCodeButton';
import Modal from './Modal';

const Actions: React.VFC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='flex justify-end mt-10 gap-4'>
      <Modal
        isOpen={isOpen}
        closeModal={() => {
          setOpen(false);
        }}
      />
      <ViewCodeButton
        openModal={() => {
          setOpen(true);
        }}
      />
      <OpenMemoButton />
    </div>
  );
};

export default Actions;
