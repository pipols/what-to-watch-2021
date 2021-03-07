import * as React from "react";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";

type Props = {
  className: string,
  isNav?: boolean,
};

const Header = (props: Props) => {
  return (
    <header className={`page-header ${props.className}`}>
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {props.isNav && <Breadcrumbs /> }

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    </header>
  );
};

export default Header;
