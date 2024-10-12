import React from "react";
import styles from "./../styles/SafetyMilestone.module.scss";

const SafetyMilestone = () => (
  <section>
    <div className={styles.downloadsPart}>
      <div className={styles.Rectangle}>
        <p className={styles.rectangleText}>
          <h4>Lost Time Injury (LTI) Free Safety Milestones</h4> <br />
          <strong>16 Years LTI Free</strong>
          <ul>
            <li>Mwanza Facility, Tanzania (January 2024)</li>
          </ul>
          <strong>7 Years LTI Free North Mara</strong>
          <ul>
            <li>Gold Mine, Tanzania (March 2023)</li>
          </ul>
          <strong>6 Years LTI Free Geita Gold Mine</strong>
          <ul>
            <li>Tanzania (March 2023) Bamako Facility</li>
            <li>Mali (February 2024) </li>
          </ul>
          <strong>4 Years LTI Free Jabal Sayid</strong>
          <ul>
            <li> Saudi Arabia (Nov 2023)</li>
          </ul>
          <strong>3 Years LTI Free Sadiola</strong>
          <ul>
            <li> Gold Mine, Mali (January2024) Bankan Project</li>
            <li>Guinea (December 2023)</li>
          </ul>
          <strong>2 Years LTI Free Bulyanhulu Gold Mine</strong>
          <ul>
            <li>Tanzania (September 2023)</li>
            <li>Kabanga Nickel Project, Tanzania (December 2023)</li>
            <li>Goulamina Gold Mine</li>
            <li>Mali (December 2023)</li>
          </ul>
          <strong>1 Year LTI Free Sukari Gold Mine</strong>
          <ul>
            <li>Tanzania (September 2023)</li>
            <li>Egypt (April 2023)</li>
          </ul>
        </p>
      </div>
      <img
        loading="lazy"
        src="./images/background3.jpeg"
        alt="Background"
        className={styles.image}
      />
    </div>
  </section>
);

export default SafetyMilestone;