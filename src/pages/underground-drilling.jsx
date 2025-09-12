import React from "react";
import styles from "../styles/UndergroundDrilling.module.scss";

const UndergroundDrilling = () => {
  return (
    <div className={styles.undergroundDrillingPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Underground Drilling</h1>
          <p className={styles.heroDescription}>
            Specialized underground drilling services for deep mining operations
            with advanced safety systems and environmental controls.
          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.servicesSection}>
          <h2>Underground Drilling Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Underground Access</h3>
              <p>
                Safe and efficient access to underground mining areas with
                specialized equipment and protocols.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Specialized Equipment</h3>
              <p>
                Purpose-built drilling rigs designed for confined underground
                spaces and challenging conditions.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Safety Systems</h3>
              <p>
                Comprehensive safety protocols including ventilation, gas
                monitoring, and emergency procedures.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Environmental Control</h3>
              <p>
                Advanced environmental monitoring and control systems to ensure
                safe working conditions.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready for Underground Operations?</h2>
            <p>Contact us to discuss your underground drilling requirements.</p>
            <button className={styles.primaryBtn}>Get Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UndergroundDrilling;
