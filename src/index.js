import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './global.css';
import App from './container/App'
import { BrowserRouter } from 'react-router-dom';
import reducer from './store/reducer';
import { createStore } from 'redux';
import { Provider } from "react-redux"

const store = createStore(reducer);
const app = (
  <Provider store = {store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app,
  document.getElementById('root')
);
