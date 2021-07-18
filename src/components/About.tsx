import React from 'react';

const About: React.VFC = () => {
  return (
    <div className='md:text-left'>
      <h1 className='text-4xl md:text-6xl mb-4 font-bold'>砂絵</h1>
      <p className='mb-6 leading-relaxed text-lg md:text-outline'>
        Pick your favorite color to customize the editor.
      </p>
    </div>
  );
};

export default About;
