import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clock from './Components/MyClock';
import Counter from './Components/Counter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Clock/> */}
    {/* <Counter/> */}

  </React.StrictMode>
);
