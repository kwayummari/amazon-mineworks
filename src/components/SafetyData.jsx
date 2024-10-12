import React from "react";
import styles from "./../styles/Data2.module.scss";

const SafetyData = () => (
  <section>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>Safety leadership</p>
        <p className={styles.subText}>
          We have a genuine commitment to keeping our employees safe and to
          continually reduce their exposure to risk while performing their work.
          We expect visible safety leadership across all levels of our company
          and operations, from our Executive Leadership Team to our drill crews
          on site.
        </p>
        <p className={styles.subText}>
          We also understand the importance our customers place on safe
          operations – free of incidents, hazards and near misses. Our clients
          can be confident that we will exceed the most stringent safety
          requirements, and deliver safe, and productive drilling solutions
          while diligently focusing on continuous improvement.
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
        <p className={styles.header}>How we keep our people safe</p>
        <p className={styles.subText}>
          We have numerous safety initiatives, training programs, policies and
          procedures designed to ensure all our employees have the knowledge to
          conduct their work safely and to address Class 1 Risks in our
          business.
        </p>
        <p className={styles.subText}>
          Most importantly we work with our employees to ensure they understand
          the controls to mitigate any risk and are empowered to act if they are
          unsafe in their workplace or they identify an unsafe condition or
          behavior.
        </p>
      </div>
    </div>
    <hr></hr>
  </section>
);

export default SafetyData;
