import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/ui/Button.module.scss";

const Button = ({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  arrow = true,
  className = "",
  ...rest
}) => {
  const classes = `${styles.button} ${styles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && <i className={`bi bi-arrow-right ${styles.icon}`} aria-hidden="true"></i>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
};

export default Button;
