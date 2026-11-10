import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/ui/IsoBadge.module.scss";

const IsoBadge = ({ light = false, className = "" }) => (
  <Link
    to="/investors?tab=certifications"
    className={`${styles.badge} ${light ? styles.light : ""} ${className}`}
  >
    <i className="bi bi-patch-check-fill" aria-hidden="true"></i>
    <span>ISO Certified</span>
  </Link>
);

export default IsoBadge;
