import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CertifiedSeal.module.scss";

const CertifiedSeal = () => (
  <Link
    to="/investors?tab=certifications"
    className={styles.seal}
    aria-label="ISO 9001, ISO 14001 and ISO 45001 certified — view certifications"
  >
    <svg viewBox="0 0 100 100" className={styles.ring} aria-hidden="true">
      <path
        id="sealCirclePath"
        d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
        fill="none"
      />
      <text className={styles.ringText}>
        <textPath href="#sealCirclePath" startOffset="0%">
          ISO 9001 &nbsp;&#8226;&nbsp; ISO 14001 &nbsp;&#8226;&nbsp; ISO 45001 &nbsp;&#8226;&nbsp;
        </textPath>
      </text>
    </svg>
    <span className={styles.center}>
      <i className="bi bi-patch-check-fill" aria-hidden="true"></i>
      <span className={styles.centerLabel}>Certified</span>
    </span>
  </Link>
);

export default CertifiedSeal;
