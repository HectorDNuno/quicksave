import React from "react";
import Navbar from "../components/Navbar";

const Onboarding = () => {
  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleChange = () => {
    console.log("changed");
  };

  return (
    <>
      <Navbar minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={""}
              onChange={handleChange}
            />

            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={""}
                onChange={handleChange}
              />

              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={""}
                onChange={handleChange}
              />

              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={""}
                onChange={handleChange}
              />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-identity"
                type="radio"
                name="gender_identity"
                value="man"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="man-gender-identity">Man</label>

              <input
                id="woman-gender-identity"
                type="radio"
                name="gender_identity"
                value="woman"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="woman-gender-identity">Woman</label>

              <input
                id="non-binary-gender-identity"
                type="radio"
                name="gender_identity"
                value="non-binary"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="non-binary-gender-identity">Non-binary</label>

              <input
                id="other-gender-identity"
                type="radio"
                name="gender_identity"
                value="other"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="other-gender-identity">Other</label>
            </div>

            <label htmlFor="show-gender">Show gender on my profile</label>
            <input id="show-gender" type="checkbox" name="show-gender" onChange={handleChange} checked={false} />

            <label>Show Me</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-interest"
                type="radio"
                name="gender_interest"
                value="man"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="man-gender-interest">Man</label>

              <input
                id="woman-gender-interest"
                type="radio"
                name="gender_interest"
                value="woman"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="woman-gender-interest">Woman</label>

              <input
                id="non-binary-gender-interest"
                type="radio"
                name="gender_interest"
                value="non-binary"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="non-binary-gender-interest">Non-binary</label>

              <input
                id="everyone-gender-interest"
                type="radio"
                name="gender_interest"
                value="everyone"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
