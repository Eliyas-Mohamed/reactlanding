
import "./Button.scss";


const Button = ({ size, className, children }) =>(<button className={`rounded-0 button-${size} ${className}`}>  {children}</button>);

export default Button
