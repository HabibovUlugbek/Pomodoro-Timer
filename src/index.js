import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Timer restingtime={5} />
  </React.StrictMode>,
  document.getElementById('root')
);

