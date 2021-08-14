import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import LoginContainer from './containers/auth/loginContainer';
import RegistContainer from './containers/auth/registContainer';
import Main from './pages/main';
import NotFound from './pages/NotFound';


export default function DynamicRoutes() {
    return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
        <Header/>
        <Switch>
            <Route exact path={"/"} component={Main}/>
            <Route path={"/signin"} component={LoginContainer}/>
            <Route path={"/signup"} component={RegistContainer}/>
            <Route component={NotFound} />
        </Switch>

    </BrowserRouter>
    );
}
