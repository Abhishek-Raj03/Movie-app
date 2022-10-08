// npm install redux
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import './index.css';
import App from './components/App';
// import { configure } from '@testing-library/react';
import rootReducer from './reducers';

// const store = createStore(movies);
const store = configureStore({reducer: rootReducer})
// console.log('store: ',store)
// console.log('BEFORE_STATE: ',store.getState())

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'superman'}]
// })
// console.log('AFTER_STATE: ',store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

