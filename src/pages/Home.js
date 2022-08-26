import React from "react";
import Navbar from "../components/Navbar";

const authToken = true;

const handleClick = () => {
  console.log("clicked");
};

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <h1>Find a Fireteam</h1>
      <button className="primary-button" onClick={handleClick}>
        {authToken ? "Sign Out" : "Create Account"}
      </button>
    </div>
  );
};

export default Home;
