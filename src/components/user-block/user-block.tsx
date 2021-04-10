import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthorizationStatus, getUserData} from "../../reducer/user/selector";
import {AuthorizationStatus, AppRoute, BaseUrl} from "../../const/common";
import {UserDataType} from "../../types";

type Props = {
  authorizationStatus: AuthorizationStatus;
  userData: UserDataType;
};

const UserBlock = (props: Props) => {
  const {authorizationStatus, userData} = props;
  const isAuthorizationStatus = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <div className="user-block">

      {isAuthorizationStatus &&
      <Link to={AppRoute.MY_LIST} >
        <div className="user-block__avatar">
          <img src={`${BaseUrl.BASE}${userData.avatarUrl}`} alt="User avatar" width="63" height="63" />
        </div>
      </Link>}

      {isAuthorizationStatus ||
      <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>}

    </div>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
});

export default connect(mapStateToProps)(UserBlock);
