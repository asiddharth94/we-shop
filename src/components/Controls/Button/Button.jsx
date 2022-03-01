import "./Button.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}
      ${isGoogleSignIn ? "google-sign-in" : ""} button`}
      {...otherProps}
    >
      {children.toUpperCase()}
    </button>
  );
};

export default Button;
