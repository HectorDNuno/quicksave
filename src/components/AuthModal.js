import React from "react";

const AuthModal = ({ setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div className="auth-modal">
      <div onClick={handleClick}>x</div>
      AuthModal
    </div>
  );
};

export default AuthModal;
