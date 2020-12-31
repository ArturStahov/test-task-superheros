import React from 'react';
import ReactDOM from 'react-dom';
import '@csstools/normalize.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import './fonts.css';
import './base.css';

import App from './App';
import AuthProvider from './components/Auth/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
