import React from "react";
import styles from "./../styles/SafetyMilestone.module.scss";

const SafetyMilestone = () => (
  <section>
    <div className={styles.downloadsPart}>
      <div className={styles.Rectangle}>
        <p className={styles.rectangleText}>
          Lost Time Injury (LTI) Free Safety Milestones <br/> 16 Years LTI Free
          Mwanza Facility, Tanzania (January 2024) <br/> 7 Years LTI Free North Mara
          Gold Mine, Tanzania (March 2023) <br/> 6 Years LTI Free Geita Gold Mine,
          Tanzania (March 2023) Bamako Facility, Mali (February 2024) <br/> 4 Years
          LTI Free Jabal Sayid, Saudi Arabia (Nov 2023) 3 Years LTI Free Sadiola
          Gold Mine, Mali (January2024) Bankan Project, Guinea (December 2023) <br/>
          2 Years LTI Free Bulyanhulu Gold Mine, Tanzania (September 2023)
          Kabanga Nickel Project, Tanzania (December 2023 <br/> Goulamina Gold Mine,
          Mali (December 2023)<br/> 1 Year LTI Free Sukari Gold Mine, Egypt (April
          2023)
        </p>
      </div>
      <img
        loading="lazy"
        src="./images/background.jpeg"
        alt="Background"
        className={styles.image}
      />
    </div>
  </section>
);

export default SafetyMilestone;