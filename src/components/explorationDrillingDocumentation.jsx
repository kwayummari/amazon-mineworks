import React from "react";
import styles from "./../styles/Documentation.module.scss";

const ExplorationDrillingDocumentation = () => (
  <section>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>
          We provide full-service mining, drilling, maintenance and geochemical
          analysis solutions to customers within the minerals industry.
        </p>
        <p className={styles.subText}>
          At Amazon Mineworks we have an uncompromising commitment to the
          occupational health and safety of our employees and others where we
          work.
        </p>
        <p className={styles.subText}>
          We operate in many diverse, remote and often difficult locations, and
          our employees’ wellbeing, regardless of where they work, is paramount.
        </p>
      </div>
      <div className={styles.downloadsPart}>
        <button className={styles.downloadButton}>
          <p>GOLDEN SAFETY RULES</p> <i className="bi bi-download"></i>
        </button>
      </div>
    </div>
  </section>
);

export default ExplorationDrillingDocumentation;
