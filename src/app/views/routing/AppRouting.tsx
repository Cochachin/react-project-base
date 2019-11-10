import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { DashBoardModule } from '../dashboard/DashboardModule';
import { AuthModule } from '../auth/AuthModule';

const AppRouting = () =>{
    return (
            <Router>
                <Switch>
                    <Route path="/login">
                        <AuthModule/>
                    </Route>
                    <Route path="/dash">
                        <DashBoardModule/>
                    </Route>
                    <Redirect to="/login"/>
                </Switch>
            </Router>
        );
    }

export default AppRouting;

