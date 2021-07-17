import React from 'react';
import About from './components/About';
import Preview from './components/Preview';
import Settings from './components/Settings';
import Footer from './components/Footer';

const Main: React.VFC = () => {
  return (
    <div className='px-5 md:px-10 py-20 flex flex-col md:flex-row justify-center md:gap-10'>
      <div className='lg:max-w-lg w-full md:w-1/2 mb-16 md:mb-0 text-center'>
        <About />
        <Preview />
      </div>
      <div className='lg:max-w-lg w-full md:w-1/3'>
        <Settings />
      </div>
    </div>
  );
};

const App: React.VFC = () => {
  return (
    <div className='bg-img bg-cover bg-center lg:bg-left min-h-screen w-screen text-white'>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
