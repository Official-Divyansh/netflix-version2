import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import  {Provider} from 'react-redux'
import contactReducer from './radux/ListReducer';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Nav from './Component/fisrt/Nav';
import Footer from './Component/fisrt/Footer';

const store = createStore(contactReducer, composeWithDevTools())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
