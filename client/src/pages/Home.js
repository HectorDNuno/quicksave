import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(true);
  };

  const authToken = false;

  return (
    <div className="overlay">
      <Navbar setShowModal={setShowModal} showModal={showModal} setIsSignUp={setIsSignUp} minimal={false} />
      <div className="home">
        <h1 className="primary-title">Find Your Team</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Sign Out" : "Create Account"}
        </button>

        {showModal && <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />}
      </div>
    </div>
  );
};

export default Home;
