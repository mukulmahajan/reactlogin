import React, { Component } from 'react';
import './App.css';
import Signuppage from'./signup/signuppage';
import { Router,browserHistory } from 'react-router';
import routes from './route';
import {Provider } from 'react-redux';
import thunk from 'react-thunk';
import { createStore,applyMiddleware} from 'redux';
class App extends Component {

  const store =createStore(
    (state={})=>state,
    applyMiddleware(thunk)
  );

render(){
  

        return(
          <Provider store={store}>
<Router history={browserHistory} routes={routes} />


          </Provider>
          
          
          


          
          
            
        );
   

}
}

export default App;
