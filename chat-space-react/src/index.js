import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link }from 'react-router';

import App from './App';
import Login from './components/login'
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
  <App />, document.getElementById('root')
);
registerServiceWorker();
