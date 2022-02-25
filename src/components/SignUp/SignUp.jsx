import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import FormInput from "../Controls/FormInput/FormInput";
import Button from "../Controls/Button/Button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./SignUp.scss";

const SignUp = () => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = userData;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setUserData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error signing up: ", error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          name="displayName"
          value={userData.displayName}
          type="text"
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          name="email"
          value={userData.email}
          type="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          name="password"
          value={userData.password}
          type="password"
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          value={userData.confirmPassword}
          type="password"
          handleChange={handleChange}
          required
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUp;
