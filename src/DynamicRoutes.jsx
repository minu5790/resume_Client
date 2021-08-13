import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import LoginContainer from './containers/auth/loginContainer';
import RegistContainer from './containers/auth/registContainer';
import Main from './pages/main';
import NotFound from './pages/NotFound';


export default function DynamicRoutes() {
    return (
    <BrowserRouter  >

        <Switch>
            <Route exact path={process.env.PUBLIC_URL +"/"} component={Main}/>
            <Route path={process.env.PUBLIC_URL +"/signin"} component={LoginContainer}/>
            <Route path={process.env.PUBLIC_URL +"/signup"} component={RegistContainer}/>
            <Route component={NotFound} />
        </Switch>
        <Header/>
    </BrowserRouter>
    );
}
