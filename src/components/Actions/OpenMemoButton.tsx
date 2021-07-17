import React from 'react';

type Props = {
  URL: string;
};

const OpenMemoButton: React.VFC<Props> = ({ URL }) => {
  return (
    <button
      onClick={() => {
        window.open('data:,Hello%2C%20World!');
      }}
      className='w-28 py-2.5 text-center font-medium bg-blue-600 rounded-lg hover:bg-blue-700'
    >
      Open Memo
    </button>
  );
};

export default OpenMemoButton;
