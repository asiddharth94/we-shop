import "./Button.scss";

const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} button`}
      {...otherProps}
    >
      {children.toUpperCase()}
    </button>
  );
};

export default Button;
