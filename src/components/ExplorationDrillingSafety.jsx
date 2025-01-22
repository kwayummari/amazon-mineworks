import React from "react";
import styles from "./../styles/Data2.module.scss";

const ExplorationDrillingSafety = () => (
  <section>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>Safety leadership</p>
        <p className={styles.subText}>
          We are committed to advancing the boundaries of exploration drilling
          by leveraging cutting-edge technology and innovative techniques. Our
          focus is on providing efficient, reliable, and sustainable solutions
          that meet the evolving needs of the minerals industry.
        </p>
        <p className={styles.subText}>
          Our clients trust us to deliver precision-driven drilling operations
          that exceed expectations. With a dedicated team of experts and a
          relentless pursuit of excellence, we ensure the highest standards of
          performance and continuous improvement in every project.
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
        <p className={styles.header}>Advancing Drilling Excellence</p>
        <p className={styles.subText}>
          We have implemented state-of-the-art techniques and methodologies
          designed to optimize drilling efficiency and minimize environmental
          impact. Our tailored solutions address the unique challenges of each
          project, ensuring consistent and dependable results.
        </p>
        <p className={styles.subText}>
          Collaboration with our clients is key to success. We empower our team
          and stakeholders to identify opportunities for innovation and to
          implement strategies that enhance operational outcomes and resource
          recovery.
        </p>
      </div>
    </div>
    <hr></hr>
  </section>
);

export default ExplorationDrillingSafety;
