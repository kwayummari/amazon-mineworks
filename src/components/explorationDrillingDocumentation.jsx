import React from "react";
import styles from "./../styles/Documentation.module.scss";

const ExplorationDrillingDocumentation = () => (
  <section>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>
          Explore advanced techniques and cutting-edge technology in exploration
          drilling.
        </p>
        <p className={styles.subText}>
          At Amazon Mineworks, we are committed to delivering efficient and
          sustainable drilling solutions tailored to the unique needs of the
          minerals industry.
        </p>
        <p className={styles.subText}>
          Our expertise ensures precision and reliability, even in the most
          challenging environments, helping you unlock the full potential of
          your resources.
        </p>
      </div>
      <div className={styles.downloadsPart}>
        <button className={styles.downloadButton}>
          <p>DRILLING BEST PRACTICES</p> <i className="bi bi-download"></i>
        </button>
      </div>
    </div>
  </section>
);

export default ExplorationDrillingDocumentation;
