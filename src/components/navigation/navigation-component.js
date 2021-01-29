import React, { useState } from "react";

import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-wrapper">
      {/* {open ? (
        <i className="fas fa-bars burger" onClick={() => setOpen(!open)}></i>
      ) : (
        <i className="fas fa-times burger" onClick={() => setOpen(!open)}></i>
      )} */}

      <div className="nav-link-wrapper">
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
  );
};

export default withRouter(Navigation);
