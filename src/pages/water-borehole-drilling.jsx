import React from "react";
import styles from "../styles/WaterBoreholeDrilling.module.scss";

const WaterBoreholeDrilling = () => {
  return (
    <div className={styles.waterBoreholeDrillingPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Water Borehole Drilling</h1>
          <p className={styles.heroDescription}>
            Water borehole drilling services for water supply and environmental
            projects with comprehensive water quality testing and maintenance
            services.
          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.servicesSection}>
          <h2>Water Borehole Drilling Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Water Source Identification</h3>
              <p>
                Advanced hydrogeological surveys to identify optimal water
                sources and drilling locations.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Borehole Construction</h3>
              <p>
                Professional borehole construction with proper casing and
                sealing for long-term reliability.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Water Quality Testing</h3>
              <p>
                Comprehensive water quality analysis to ensure safe and potable
                water supply.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Maintenance Services</h3>
              <p>
                Ongoing maintenance and rehabilitation services to ensure
                optimal borehole performance.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Need Water Solutions?</h2>
            <p>
              Contact us to discuss your water borehole drilling requirements.
            </p>
            <button className={styles.primaryBtn}>Get Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterBoreholeDrilling;
