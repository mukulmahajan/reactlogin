import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router,browserHistory } from 'react-router';
import routes from './route';
import {Provider } from 'react-redux';
import thunk from 'react-thunk';
import { createStore,applyMiddleware} from 'redux';

const store =createStore(
    (state={})=>state,
    applyMiddleware(thunk)
  );
    
    
   
    
    render(
    <Provider store={store}>

    <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app'));


