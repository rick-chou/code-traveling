import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import 'antd/dist/antd.css';
import '@style/antd.css';
import '@utils/mock';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
