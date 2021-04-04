import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selector";
import {AuthorizationStatus, AppRoute} from "../../const/common";

type Props = {
  authorizationStatus: AuthorizationStatus;
};

const UserBlock = (props: Props) => {
  const isAuthorizationStatus = props.authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <div className="user-block">

      {isAuthorizationStatus &&
      <Link to={AppRoute.MY_LIST} >
        <div className="user-block__avatar">
          <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </Link>}

      {isAuthorizationStatus ||
      <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>}

    </div>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(UserBlock);
