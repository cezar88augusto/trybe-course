import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CarsProvider  from './context/CarsProvider';

ReactDOM.render(
  <CarsProvider>
    <App />
  </CarsProvider>,
  document.getElementById('root'),
);