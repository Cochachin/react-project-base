import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DashBoardModuleNav from '../dashboard/DashboardModule';
import { AuthModule } from '../auth/AuthModule';
import { Provider } from 'react-redux';
import Store from '../../store/Store';

const AppRouting = () =>{
    return (
            <Provider store={Store}>
                <Router>
                    <Switch>
                        <Route path="/login">
                            <AuthModule/>
                        </Route>
                        <Route path="/dash">
                            <DashBoardModuleNav />
                        </Route>
                        <Redirect to="/login"/>
                    </Switch>
                </Router>
            </Provider>
        );
    }

export default AppRouting;

