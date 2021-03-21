import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root'));