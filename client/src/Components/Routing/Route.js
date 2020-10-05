import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import SignUp from '../Auth/signup';
import SignIn from '../Auth/signin';
import Admin from '../Admin/Admin';
import PrivateRoute from './PrivateRoute';
import AdminComponent from './AdminComponent';
import Chinese from '../Food/Chinese';
import Orders from '../User/Orders';
import History from '../User/History';
import Payment from '../User/Payment';
import OrderPlaced from '../Admin/OrderPlaced';
const Routes = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact component={SignIn} path="/signin" />
          <Route exact component={SignUp} path="/signup" />
          <PrivateRoute exact component={Home} path="/" />
          <PrivateRoute exact component={Orders} path="/orders" />
          <PrivateRoute exact component={History} path="/history" />
          <PrivateRoute exact component={Payment} path="/payment" />
          <AdminComponent exact component={OrderPlaced} path="/orderplaced" />
          <AdminComponent exact component={Admin} path="/admin" />
          <PrivateRoute exact component={Chinese} path="/:food" />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default Routes;
