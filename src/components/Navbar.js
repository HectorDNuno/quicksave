import React from "react";
import arrows from "../components/images/rotate-solid.svg";

const Navbar = ({ authToken, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={arrows} alt="" />
        <div className="title"> quicksave </div>
      </div>

      {!authToken && (
        <button className="nav-button" onClick={handleClick} disabled={showModal}>
          Log in
        </button>
      )}
    </nav>
  );
};

export default Navbar;
