import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";

import Button from "../Controls/Button/Button";
import FormInput from "../Controls/FormInput/FormInput";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.scss";

const SignIn = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setData({ email: "", password: "" });
    } catch (error) {
      console.error("Error Signing In: ", error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          value={data.email}
          type="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          name="password"
          value={data.password}
          type="password"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <Button type="submit"> SIGN IN </Button>
          <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
