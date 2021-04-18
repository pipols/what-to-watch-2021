import * as React from "react";
import {Route, Redirect, RouteProps} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const/common";
import {getAuthorizationStatus} from "../../reducer/user/selector.js";

type Props = RouteProps & {
  authorizationStatus: string;
  render: () => React.ReactNode;
}

const PrivateRoute = (props: Props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(match) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(match)
            : <Redirect to="/login" />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
