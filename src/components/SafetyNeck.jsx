import React from "react";
import styles from "./../styles/Documentation.module.scss";

const SafetyNeck = () => (
  <section>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>
          Our Safety Risk Leadership Walk (SRLW) program aims to facilitate
          specific, direct communication regarding tasks and workplace risks
          between our employees and our management team.
        </p>
        <p className={styles.subText}>
        Read our Case Study to learn more about this important safety initiative.
        </p>
      </div>
      <div className={styles.downloadsPart}>
        <button className={styles.downloadButton}>
          <p>Download Case Study</p> <i className="bi bi-download"></i>
        </button>
      </div>
    </div>
  </section>
);

export default SafetyNeck;
