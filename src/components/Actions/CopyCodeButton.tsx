import React from 'react';

type Props = {
  URL: string;
};

const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then((e) => alert('Copied!! Then paste it in your address bar.'))
    .catch((e) => alert('Sorry, something went wrong😥'));
};

const CopyCodeButton: React.VFC<Props> = ({ URL }) => {
  return (
    <button
      onClick={() => copyToClipboard(URL)}
      className='w-28 py-2.5 text-center font-medium bg-blue-600 rounded-lg hover:bg-blue-700'
    >
      Copy Code
    </button>
  );
};

export default CopyCodeButton;
