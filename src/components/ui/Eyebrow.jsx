import React from "react";
import styles from "../../styles/ui/Eyebrow.module.scss";

const Eyebrow = ({ children, light = false, className = "" }) => (
  <p className={`${styles.eyebrow} ${light ? styles.light : ""} ${className}`}>
    <span className={styles.rule} />
    {children}
  </p>
);

export default Eyebrow;
