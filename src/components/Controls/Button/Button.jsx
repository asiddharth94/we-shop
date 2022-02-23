import "./Button.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="button" {...otherProps}>
      {children.toUpperCase()}
    </button>
  );
};

export default Button;
