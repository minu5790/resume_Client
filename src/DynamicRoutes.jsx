import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';

import Main from './pages/main';
import NotFound from './pages/NotFound';
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

export default function DynamicRoutes() {
    return (
    <BrowserRouter  >

        <Switch>
            <Route exact path={process.env.PUBLIC_URL +"/"} component={Main}/>
            <Route path={process.env.PUBLIC_URL +"/signin"} component={SignIn}/>
            <Route path={process.env.PUBLIC_URL +"/signup"} component={SignUp}/>
            <Route component={NotFound} />
        </Switch>
        <Header/>
    </BrowserRouter>
    );
}
