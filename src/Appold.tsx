import React, { useState } from 'react';
import Preview from './Preview';
import Picker from './Picker';
import Output from './Output';

const LeftBlock: React.VFC = () => {
  return (
    <div className='max-w-sm md:w-1/2 md:pr-16 md:text-left mb-16 md:mb-0 text-center'>
      <h1 className='sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
        Sunae Memo
      </h1>
      <p className='mb-6 leading-relaxed'>
        Pick your favorite color to customize the editor.
      </p>

      <div className='mb-4 w-full px-4 bg-gray-100 rounded'>
        <Picker></Picker>
        <Picker></Picker>
      </div>

      <Output></Output>
    </div>
  );
};

interface IStyle {
  backgroundColor: string;
  textColor: string;
}

const Appold: React.VFC = () => {
  const [style, setStyle] = useState<IStyle>({
    backgroundColor: '#282C34',
    textColor: '#ffffff',
  });

  return (
    <section className='text-gray-600'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <LeftBlock></LeftBlock>

        <Preview></Preview>
      </div>
    </section>
  );
};

export default Appold;
