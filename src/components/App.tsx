import React, { useState } from 'react';
import About from './About';
import Preview from './Preview';
import Settings from './Settings';
import Footer from './Footer';

export type Theme = {
  backgroundColor: string;
  color: string; // font color
  padding: number; // インラインスタイルでは自動的にpxが補完されるのでnumber型でよい
  lineHeight: number; // 単位なし フォントサイズに応じた高さ
};

const Main: React.VFC = () => {
  const [theme, setTheme] = useState<Theme>({
    backgroundColor: '#282C34',
    color: '#ffffff',
    padding: 20,
    lineHeight: 2,
  });

  const updateTheme = (obj: object) => {
    // 既存のオブジェクトを消さないように統合する
    const newTheme = { ...theme, ...obj };
    setTheme(newTheme);
  };

  return (
    <div className='px-5 md:px-10 py-20 flex flex-col md:flex-row justify-center md:gap-10'>
      <div className='lg:max-w-lg w-full md:w-1/2 mb-16 md:mb-0 text-center'>
        <About />
        <Preview theme={theme} />
      </div>
      <div className='lg:max-w-lg w-full md:w-1/3'>
        <Settings theme={theme} updateTheme={updateTheme} />
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
