import React from "react";
import "./Nav.scss";

import { NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="active">
          Todo
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/user" activeClassName="active">
          User
        </NavLink>
        {/* <a href="/">Home</a>
        <a href="/todo">Todo</a>
        <a href="/about">About</a> */}
      </div>
    );
  }
}

export default Nav;
