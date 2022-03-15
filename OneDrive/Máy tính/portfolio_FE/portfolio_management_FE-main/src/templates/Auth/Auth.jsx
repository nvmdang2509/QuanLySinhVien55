import React from "react";
import { Route } from "react-router-dom";

const AuthPage = (props) => {
  const { Component, ...restParam } = props;

  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <div className="authPage">
            <div className="container">
              <div className="d-flex justify-content-center h-100">
                <Component {...propsRoute} />
              </div>
            </div>
            ;
          </div>
        );
      }}
    />
  );
};

export default AuthPage;
