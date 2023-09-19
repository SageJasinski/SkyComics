import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Paths from './Routes';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Paths />
  </React.StrictMode>
);


reportWebVitals();
