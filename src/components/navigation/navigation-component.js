import React, { useState } from "react";
// import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div
          className={`nav-link-wrapper ${
            open ? "nav-link-media" : "nav-link-wrapper"
          }`}
          style={{ transform: open ? "translateX(0px)" : "translateX(-500px)" }}
        >
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>

          <NavLink to="/about" activeClassName="nav-link-active">
            About
          </NavLink>

          <NavLink to="/statistics" activeClassName="nav-link-active">
            Statistics
          </NavLink>
        </div>
      </div>

      <div className="right-side">
        <i className="fas fa-bars burger" onClick={() => setOpen(!open)}></i>
      </div>
    </div>
  );
};

export default withRouter(Navigation);
