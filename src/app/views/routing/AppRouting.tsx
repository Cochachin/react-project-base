import React from 'react';
import { Router, Route, Switch, Redirect,  } from 'react-router-dom';
import DashBoardModuleNav from '../dashboard/DashboardModule';
import { createBrowserHistory } from 'history';
import { AuthModule } from '../auth/AuthModule';
import { Provider } from 'react-redux';
import Store from '../../store/Store';
import ReactGA from 'react-ga';
import { Constant } from '../../model/constant/Constant';

ReactGA.initialize(
    Constant.GOOGLE_ANALYTICS,
    {debug: true}
);
ReactGA.event({
    category: 'User',
    action: 'Hello world'
});
const history = createBrowserHistory();
history.listen((location) => {
    //console.log(location);
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }
);

const AppRouting = () =>{
    return (
            <Provider store={Store}>
                <Router history={history}>
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

