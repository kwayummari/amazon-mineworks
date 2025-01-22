import React from "react";
import styles from "./../styles/CommunitySupport.module.scss";

const Vision = () => (
  <section>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>Our Vision</p>
        <p className={styles.subText}>
          To be recognized as the industry's premier service provider
          of exploration and mining services, setting the standard
          with comprehensive solutions that prioritize safety,
          compliance and sustainability.
        </p>
      </div>
    </div>
    <div className={styles.downloadsPart}>
      <div className={styles.Rectangle}>
        <p className={styles.rectangleText}>
          In my experience of using theAmazon Mineworks teams over the last 10 
          years or so I can honestly say they have some of the best and most
          positively impactful social programmes for their staff and the
          communities in which they operate. It is a comfort to know that your
          ‘contractors’ are just as focussed on developing and maintaining a
          project's social license to operate as the owner's teams are. Well
          done again to Capital Drilling, setting the standard for the industry.
          Tim Livesey Director and Group CEO, Oriole Resource
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
