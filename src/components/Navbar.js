import React from "react";
import arrows from "../components/images/rotate-solid.svg";

const Navbar = ({ authToken }) => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={arrows} alt="" />
        <h1> Quicksave </h1>
      </div>

      {!authToken && <button className="nav-button"> Log in </button>}
    </nav>
  );
};

export default Navbar;
