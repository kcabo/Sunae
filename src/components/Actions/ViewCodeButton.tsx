import React from 'react';

type Props = {
  openModal: () => void;
};

const ViewCodeButton: React.VFC<Props> = ({ openModal }) => {
  return (
    <button
      onClick={openModal}
      className='w-28 py-2.5 text-center font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg'
    >
      View Code
    </button>
  );
};

export default ViewCodeButton;
