import React from "react";
import styles from "./../styles/Data2.module.scss";

const GradeControlDrillingSafety = () => (
  <section>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>Precision in Grade Control</p>
        <p className={styles.subText}>
          At Amazon Mineworks, we specialize in grade control drilling to help
          our clients maximize resource recovery and optimize mining operations.
          Our advanced techniques ensure precise ore boundary definition and
          accurate sampling for better decision-making.
        </p>
        <p className={styles.subText}>
          By combining expertise, technology, and innovation, we deliver
          reliable data that supports efficient extraction, reduces waste, and
          enhances the profitability of your mining projects.
        </p>
      </div>
      <div className={styles.downloadsPart}>
        <img
          loading="lazy"
          src="./images/image3.jpeg"
          alt="Amazon Mineworks operations"
          className={styles.image}
        />
      </div>
    </div>
    <hr />
    <div className={styles.documentation}>
      <div className={styles.downloadsPart2}>
        <img
          loading="lazy"
          src="./images/image4.jpeg"
          alt="Amazon Mineworks operations"
          className={styles.image}
        />
      </div>
      <div className={styles.textPart}>
        <p className={styles.header}>Optimizing Resource Recovery</p>
        <p className={styles.subText}>
          Our grade control drilling services are tailored to meet the unique
          challenges of each site. We provide accurate, real-time data that
          helps streamline operations and improve ore recovery rates.
        </p>
        <p className={styles.subText}>
          Collaboration is at the heart of what we do. We work closely with our
          clients to implement customized solutions that align with their
          operational goals, ensuring both efficiency and sustainability.
        </p>
      </div>
    </div>
    <hr></hr>
  </section>
);

export default GradeControlDrillingSafety;
