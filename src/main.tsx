import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import App from './components/App';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <div className='bg-img bg-cover bg-center lg:bg-left min-h-screen w-screen text-white'>
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
