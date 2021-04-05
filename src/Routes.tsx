import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SuperiorBar from './core/components/SuperiorBar';
import Home from './pages/Home';
import Search from './pages/Search';

const Routes = () => (
    <BrowserRouter>
        <SuperiorBar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;