// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CarsProvider from './context/Provider';

ReactDOM.render(
  <CarsProvider>
    <App />
  </CarsProvider>,
  document.getElementById('root'),
);
