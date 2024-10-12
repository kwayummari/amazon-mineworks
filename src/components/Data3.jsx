import React from "react";
import styles from "./../styles/Data.module.scss";

const Data3 = () => (
  <section>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>Creating Career Opportunities</p>
        <p className={styles.subText}>
          Our apprenticeship program provides our National employees with the
          opportunity to travel to Australia to complete internationally
          recognized qualifications that will provide further career
          opportunities - not just in their home countries but across Africa and
          around the world.
        </p>
        <p className={styles.subText}>
          This initiative forms part of Capital Limited’s ongoing strategy to
          provide considerable training and professional development
          opportunities for its national employee workforce.
        </p>
      </div>
      <div className={styles.downloadsPart}>
        <img
          loading="lazy"
          src="./images/image8.jpeg"
          alt="Amazon Mineworks operations"
          className={styles.image}
        />
        <img
          loading="lazy"
          src="./images/image9.png"
          alt="Amazon Mineworks operations"
          className={styles.image}
        />
      </div>
    </div>
    <hr />
  </section>
);

export default Data3;
