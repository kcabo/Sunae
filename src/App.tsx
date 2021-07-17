import React from 'react';
import About from './components/About';
import Preview from './components/Preview';
import Settings from './components/Settings';
import Footer from './components/Footer';

const Main: React.VFC = () => {
  return (
    <div className='px-10 py-20 flex flex-col md:flex-row items-center justify-center'>
      <div className='lg:max-w-sm md:w-1/2 md:pr-16 md:text-left mb-16 md:mb-0 text-center'>
        <About />
        <Preview />
      </div>
      <div className='lg:max-w-lg w-full'>
        <Settings />
      </div>
    </div>
  );
};

const App: React.VFC = () => {
  return (
    <div className='bg-img bg-cover min-h-screen w-screen text-white'>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
