import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import loginpage from './login/loginpage';
export default (
    <Route path="/" component={App}>
        <Route path="login" component={loginpage} />
    </Route>
)