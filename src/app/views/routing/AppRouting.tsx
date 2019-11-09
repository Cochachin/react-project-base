import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DashBoardModule } from '../dashboard/DashboardModule';

const AppRouting = () =>(
    <Router>
        <Switch>
            <Route path="/" component = { DashBoardModule }/>
        </Switch>
    </Router>
);

export default AppRouting;

