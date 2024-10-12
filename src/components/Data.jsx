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
    <hr></hr>
    <div className={styles.documentation}>
      <div className={styles.downloadsPart2}>
        <img
          loading="lazy"
          src="./images/image5.jpeg"
          alt="Amazon Mineworks operations"
          className={styles.image}
        />
        <img
          loading="lazy"
          src="./images/image6.jpeg"
          alt="Amazon Mineworks operations"
          className={styles.image}
        />
      </div>
      <div className={styles.textPart}>
        <p className={styles.header}>Young & Expanding Fleet</p>
        <p className={styles.subText}>
          Our company operates one of the youngest rig fleets in the industry,
          while our Heavy Mining Equipment fleet is rapidly growing and now
          includes 834, D9 and D10T bulldozers, 785 and 777 dump trucks and 330,
          340, 390, 395, 6020 and 6040 excavators.
        </p>
        <p className={styles.subText}>
          Our fleet has a reputation for its quality and reliability as a result
          of regular maintenance and upgrades. Our equipment is also fitted with
          the latest technologies for enhanced efficiency, safety and data
          collection.
        </p>
      </div>
    </div>
    <hr></hr>
  </section>
);

export default Data;
