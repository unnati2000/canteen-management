import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

const AdminRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
        'loading'
      ) : user ? (
        user.name === 'admin' ? (
          <Component {...props} />
        ) : (
          <h1>Unauthorized</h1>
        )
      ) : (
        'loading'
      )
    }
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AdminRoute);
