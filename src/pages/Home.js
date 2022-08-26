import React from "react";
import Navbar from "../components/Navbar";

const authToken = false;

const handleClick = () => {
  console.log("clicked");
};

const Home = () => {
  return (
    <div className="home">
      <Navbar authToken={authToken} />
      <h1>Find a Fireteam</h1>
      <button className="primary-button" onClick={handleClick}>
        {authToken ? "Sign Out" : "Create Account"}
      </button>
    </div>
  );
};

export default Home;
