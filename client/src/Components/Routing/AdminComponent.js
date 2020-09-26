import React from 'react';
import { Route } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
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
        <Spinner />
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
