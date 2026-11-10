import React from "react";
import styles from "../../styles/ui/Container.module.scss";

const Container = ({ children, narrow = false, className = "", as: Tag = "div" }) => (
  <Tag className={`${styles.container} ${narrow ? styles.narrow : ""} ${className}`}>
    {children}
  </Tag>
);

export default Container;
