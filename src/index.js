// npm install redux
//npm install redux-logger
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
// import { createLogger } from 'redux-logger'
import './index.css';
import App from './components/App';
// import { configure } from '@testing-library/react';
import rootReducer from './reducers';

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
  console.log('action_type: ',action.type);
        next(action);
}

// const store = createStore(movies);
const store = configureStore({reducer: rootReducer, middleware: [logger]});
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

