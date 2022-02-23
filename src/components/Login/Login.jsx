import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Login;
