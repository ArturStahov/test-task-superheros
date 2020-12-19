import React from 'react';
import ReactDOM from 'react-dom';
import '@csstools/normalize.css';
import './fonts.css';
import './base.css';
import App from './App';
import AuthProvider from './components/Auth/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
