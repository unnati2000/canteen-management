import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadUser } from '../actions/auth';
import setAuthToken from '../Utils/setAuthToken';
import Routing from './Routing/Route';
import Alert from './Alert/Alert';

import store from '../store';
const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <Switch>
            <Routing />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
