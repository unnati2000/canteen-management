import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home/Home';
import SignUp from './Auth/signup';
import SignIn from './Auth/signin';
import Admin from './Admin/Admin';
import AdminControl from './Admin/AdminControl';
import setAuthToken from '../Utils/setAuthToken';
import BreakFast from './Food/Breakfast';

import store from '../store';
const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    //store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={SignUp} path="/signup" />
            <Route exact component={SignIn} path="/signin" />
            <Route exact component={Admin} path="/admin" />
            <Route exact component={AdminControl} path="/admincontrol" />
            <Route exact component={BreakFast} path="/breakfast" />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
