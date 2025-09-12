import React from "react";
import styles from "../styles/GeothermalDrilling.module.scss";

const GeothermalDrilling = () => {
  return (
    <div className={styles.geothermalDrillingPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Geothermal Drilling</h1>
          <p className={styles.heroDescription}>
            Geothermal drilling services for renewable energy projects and
            exploration with high-temperature capabilities and environmental
            monitoring.
          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.servicesSection}>
          <h2>Geothermal Drilling Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>High-Temperature Drilling</h3>
              <p>
                Specialized drilling for high-temperature geothermal reservoirs
                with advanced cooling systems.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Geothermal Assessment</h3>
              <p>
                Comprehensive geothermal resource assessment and feasibility
                studies for energy projects.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Environmental Monitoring</h3>
              <p>
                Continuous environmental monitoring to ensure sustainable
                geothermal operations.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Energy Efficiency</h3>
              <p>
                Optimized drilling processes for maximum energy efficiency and
                minimal environmental impact.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready for Geothermal Energy?</h2>
            <p>Contact us to discuss your geothermal drilling requirements.</p>
            <button className={styles.primaryBtn}>Get Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeothermalDrilling;
