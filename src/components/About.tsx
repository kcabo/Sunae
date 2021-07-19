import React from 'react';

const About: React.VFC = () => {
  return (
    <div className='md:text-left'>
      <h1 className='text-4xl md:text-6xl mb-4 font-bold'>砂絵</h1>
      <p className='mb-1 leading-relaxed md:text-outline'>
        A handy and simple WYSIWYG text editor for your browser.{' '}
        <br className='hidden lg:block' />
        Build your own editor from the{' '}
        <span className='hidden md:inline'>right</span> pane{' '}
        <span className='inline md:hidden'>below</span>.
      </p>
      <p className='mb-6 text-gray-400'>
        <a href='https://github.com/kcabo/Sunae#readme'>Read Document →</a>
      </p>
    </div>
  );
};

export default About;
