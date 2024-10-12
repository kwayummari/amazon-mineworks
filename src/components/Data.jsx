import React from "react";
import styles from "./../styles/Data.module.scss";

const Data = () => (
  <section>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>
        Fully Integrated Range of Mining Services
        </p>
        <p className={styles.subText}>
          We have the capacity to offer a fully integrated mining services
          solution from first stage exploration drilling to delivery of ore to
          the mill.
        </p>
        <p className={styles.subText}>
          This means we have the capacity to work across all facets of your
          project delivering greater management and communication efficiencies,
          identification and faster implementation of improvements or changes
          and a flexible, coordinated approach to ensuring the program remains
          on schedule.
        </p>
      </div>
      <div className={styles.downloadsPart}>
        <img
          loading="lazy"
          src="./images/image1.jpeg"
          alt="Amazon Mineworks operations"
          className={styles.image}
        />
        <img
          loading="lazy"
          src="./images/image2.jpeg"
          alt="Amazon Mineworks operations"
          className={styles.image}
        />
      </div>
    </div>
  </section>
);

export default Data;
