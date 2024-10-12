import React from "react";
import styles from "./../styles/Data2.module.scss";

const Data2 = () => (
  <section>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>Road Construction</p>
        <p className={styles.subText}>
          Road construction involves several phases, including planning, site
          preparation, earthwork, sub-base and base course construction,
          pavement Road construction involves several phases, including
          planning, site preparation, earthwork, sub-base and base course
          construction, pavement 
        </p>
        <p className={styles.subText}>
          Our fleet has a reputation for its quality and reliability as a result
          of regular maintenance and upgrades. Our equipment is also fitted with
          the latest technologies for enhanced efficiency, safety and data
          collection.
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
        <p className={styles.header}>Bridges Construction</p>
        <p className={styles.subText}>
          Bridge Construction Process · Step 1: Site Inspection and Planning ·
          Step 2: Setting the Foundation · Step 3: Installing Piers and Bridge
          Supports.Bridges are designed, first, to carry their own permanent
          weight, or dead load; second, to carry traffic, or live loads; and,
          finally, to resist natural forces.
        </p>
        <p className={styles.subText}>
          Bridge Construction Process · Step 1: Site Inspection and Planning ·
          Step 2: Setting the Foundation · Step 3: Installing Piers and Bridge
          Supports.Bridges are designed, first, to carry their own permanent
          weight, or dead load; second, to carry traffic, or live loads; and,
          finally, to resist natural forces.
        </p>
      </div>
    </div>
    <hr></hr>
    <div className={styles.documentation}>
      <div className={styles.textPart}>
        <p className={styles.header}>Railway Construction</p>
        <p className={styles.subText}>
          Railway construction is also called track laying and ballasting. It is
          the process of laying the railway sleepers and tracks on the track
          bed.Our Railway Construction capability supports the latest
          technology, management and engineering know-how. Working on railways,
          metro systems and light rail.
        </p>
        <p className={styles.subText}>
          Railway construction is also called track laying and ballasting. It is
          the process of laying the railway sleepers and tracks on the track
          bed.Our Railway Construction capability supports the latest
          technology, management and engineering know-how. Working on railways,
          metro systems and light rail.
        </p>
      </div>
      <div className={styles.downloadsPart}>
        <img
          loading="lazy"
          src="./images/image7.jpeg"
          alt="Amazon Mineworks operations"
          className={styles.image}
        />
      </div>
    </div>
    <hr></hr>
  </section>
);

export default Data2;
