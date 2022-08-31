import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const authToken = false;

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="overlay">
      <Navbar authToken={authToken} setShowModal={setShowModal} showModal={showModal} />
      <h1>Find a Fireteam</h1>
      <button className="primary-button" onClick={handleClick}>
        {authToken ? "Sign Out" : "Create Account"}
      </button>

      {showModal && <AuthModal setShowModal={setShowModal} />}
    </div>
  );
};

export default Home;
