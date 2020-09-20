import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import SignUp from '../Auth/signin';
import SignIn from '../Auth/signin';
import AdminControlReal from '../Admin/AdminControlReal';
import Admin from '../Admin/Admin';
import AdminControl from '../Admin/AdminControl';
import PrivateRoute from './PrivateRoute';
import AdminComponent from './AdminComponent';
import Chinese from '../Food/Chinese';
import Orders from '../User/Orders';

const Routes = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <PrivateRoute exact component={Home} path="/" />
          <PrivateRoute exact component={Orders} path="/orders/:id" />
          <Route exact component={SignUp} path="/signup" />
          <Route exact component={SignIn} path="/signin" />
          <AdminComponent exact component={Admin} path="/admin" />
          <PrivateRoute exact component={Chinese} path="/:food" />

          <AdminComponent exact component={AdminControl} path="/admincontrol" />
          <AdminComponent
            exact
            component={AdminControlReal}
            path="/admincontrolreal"
          />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default Routes;
