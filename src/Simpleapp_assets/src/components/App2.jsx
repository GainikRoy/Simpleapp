import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Client from "./pages/Client";
import Emp from "./pages/Emp";
import Home from "./pages/Home";

const App2 = () => {
    return <>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/client">
                    <Client />
                </Route>
                <Route path="/emp">
                    <Emp />
                </Route>
            </Switch>
        </Router>
    </>
}


export default App2;