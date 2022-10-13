// npm install redux
//npm install redux-logger (no need here)
// npm install redux-thunk
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
// import { createLogger } from 'redux-logger'
import './index.css';
import App from './components/App';
// import { configure } from '@testing-library/react';
import rootReducer from './reducers';

// used between action and reducer to differentiate action types
import thunk from 'redux-thunk'; 

// function logger(obj,next,action)
// logger(obj)(next)(action)
// const logger = function({dispatch, getState}){
//   console.log('hi')
//   return function(next) {
//     return function(action) {
//       console.log('action_type: ',action.type);
//       next(action);
//     }
//   }
// }
const logger = ({dispatch, getState}) => (next) => (action) => {
  if(typeof action !== 'function') {
    console.log('action_type: ',action.type);
  }
    next(action);
}

// const thunk = ({dispatch, getState}) => (next) => (action) => {
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//    next(action);
// }

// const store = createStore(movies);
const store = configureStore({reducer: rootReducer, middleware: [logger,thunk]});
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

