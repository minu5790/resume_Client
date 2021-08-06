import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './pages/main';
import NotFound from "./pages/NotFound";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

export default function DynamicRoutes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
    );
}
