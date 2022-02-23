import { useState } from "react";
import Button from "../Controls/Button/Button";
import FormInput from "../Controls/FormInput/FormInput";

import "./SignIn.scss";

const SignIn = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
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
        <Button type="submit"> SIGN IN </Button>
      </form>
    </div>
  );
};

export default SignIn;
