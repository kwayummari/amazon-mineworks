import React from "react";
import styles from "./../styles/Vision.module.scss";

const Vision = () => (
  <section>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>Our Vision</p>
        <p className={styles.subText}>
          To be recognized as the industry's premier service provider of
          exploration and mining services, setting the standard with
          comprehensive solutions that prioritize safety, compliance and
          sustainability.
        </p>
      </div>
    </div>
    <div className={styles.downloadsPart}>
      <div className={styles.Rectangle}>
        <p className={styles.header}>Our Mission</p>
        <p className={styles.rectangleText}>
          To help our customers achieve their business objectives,
          through the application of our knowledge, experience and
          our end-to-end service proposition.
        </p>
      </div>
      <img
        loading="lazy"
        src="./images/background.jpeg"
        alt="Background"
        className={styles.image}
      />
    </div>
    <div className={styles.ListImages}>
      <img
        loading="lazy"
        src="./images/LImage1.png"
        alt="Background"
        className={styles.LImage}
      />
      <img
        loading="lazy"
        src="./images/LImage2.png"
        alt="Background"
        className={styles.LImage}
      />
      <img
        loading="lazy"
        src="./images/LImage3.png"
        alt="Background"
        className={styles.LImage}
      />
      <img
        loading="lazy"
        src="./images/LImage4.png"
        alt="Background"
        className={styles.LImage}
      />
    </div>
    <hr />
  </section>
);

export default Vision;