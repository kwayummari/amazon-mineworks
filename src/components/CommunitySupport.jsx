import React from "react";
import styles from "./../styles/CommunitySupport.module.scss";

const CommunitySupport = () => (
  <section>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>Local Community Support</p>
        <p className={styles.subText}>
          We embrace our role in the communities where we work and recognize the
          impact our operations can have on local society. We strive to develop
          strong relationships with these communities and build sustainable
          value in local regions by providing a range of support to residents,
          local communities and charity organizations.
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
  </section>
);

export default CommunitySupport;
