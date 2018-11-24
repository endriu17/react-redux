import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import {ADD_COMMENT} from './actions'
import addComment from './actions'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
