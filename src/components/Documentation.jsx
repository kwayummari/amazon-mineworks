import React from "react";
import styles from "./../styles/Documentation.module.scss";

const Documentation = () => (
  <section>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>
          We provide full-service mining, drilling, maintenance and geochemical
          analysis solutions to customers within the minerals industry.
        </p>
        <p className={styles.subText}>
          Our services extend across the mining value chain, from initial
          exploration drilling to load and haul, providing our customers with a
          fully integrated mining services solution.
        </p>
        <p className={styles.subText}>
          Our reputation is built on an unwavering commitment to safety,
          delivering professional mining solutions and working closely with our
          customers to deliver operational efficiencies.
        </p>
      </div>
      <div className={styles.downloadsPart}>
        <button className={styles.downloadButton}>COMPANY OVERVIEW</button>
        <button className={styles.downloadButton}>DRILLING OVERVIEW</button>
      </div>
    </div>
  </section>
);

export default Documentation;
