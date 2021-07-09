import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type MyProps = {
  name: string;
  txtStyle: string;
};

const MyFirstComponent: React.VFC<MyProps> = ({ name, txtStyle }) => {
  return (
    <p className={'text-red-100 p-10 ' + txtStyle}>
      初めてのReact！こんちくわ{name}だよ
    </p>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p className='text-red-800 text-4xl'>こんにちは Vite + React!</p>
        <MyFirstComponent name='太郎' txtStyle='underline' />
        <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
