import React from "react";
// import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about" activeClassName="nav-link-active">
            About
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/statistics" activeClassName="nav-link-active">
            Statistics
          </NavLink>
        </div>
      </div>

      <div className="right-side">MATTHEW RICKLEFS</div>
    </div>
  );
};

export default withRouter(Navigation);
