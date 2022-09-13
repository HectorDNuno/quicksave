import React from "react";
import arrows from "../components/images/rotate-solid.svg";
import blackArrows from "../components/images/rotate-solid-black.svg";

const Navbar = ({ authToken, setShowModal, showModal, setIsSignUp, minimal }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? blackArrows : arrows} alt="" />
        <div className={minimal ? "dark-title" : "title"}> quicksave </div>
      </div>

      {!authToken && !minimal && (
        <button className="nav-button" onClick={handleClick} disabled={showModal}>
          Log in
        </button>
      )}
    </nav>
  );
};

export default Navbar;
