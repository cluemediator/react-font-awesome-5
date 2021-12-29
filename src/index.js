import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
library.add(faSmile, faLaptopCode);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);