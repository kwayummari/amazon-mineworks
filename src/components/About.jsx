import React, { useState, useEffect } from "react";
import databaseService from "../services/realMySQLService";
import styles from "./../styles/About.module.scss";

const About = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const partnersData = await databaseService.getPartnersWithFallback();
        setPartners(partnersData);
      } catch (error) {
        console.error("Error loading partners:", error);
        // Fallback to localStorage
        const savedPartners = JSON.parse(
          localStorage.getItem("partners") || "[]"
        );
        setPartners(savedPartners);
      }
    };

    loadPartners();
  }, []);

  return (
    <section className={styles.about}>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Since</span>
          <span className={styles.statValue}>2012</span>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Sub company</span>
          <span className={styles.statValue}>5</span>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Total employees</span>
          <span className={styles.statValue}>1210+</span>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Commodity</span>
          <span className={styles.statValue}>3</span>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>AMAZON MINEWORKS</h2>
          <p className={styles.description}>
            Our activities cover the full construction spectrum and are divided
            into three main operating divisions – Building Construction, Civil
            Engineering and Roads and Earthworks. Our activities cover the full
            construction spectrum and are divided into three main operating
            divisions – Building Construction, Civil Engineering and Roads and
            Earthworks. Our activities cover the full construction spectrum and
            are divided into three main operating divisions –
          </p>
          <p className={styles.trustedBy}>Trusted by</p>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60f2c9fe8bc4a9cbc4f72cacd6760635a6678a2bc50f6b1baf88d210a021e8aa?apiKey=69c943fd599c485fb32c02233b347491&"
          alt="Amazon Mineworks operations"
          className={styles.image}
        />
        <p className={styles.trustedBy1}>Trusted by</p>
      </div>

      {partners.length > 0 ? (
        <div className={styles.partnersContainer}>
          <div className={styles.partnersGrid}>
            {partners.map((partner) => (
              <div key={partner.id} className={styles.partnerItem}>
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className={styles.partnerLogo}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.defaultPartnersContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee02162b5d14d8fa125903410643b9a2384bb13f9b575fafda15d4198183fc40?apiKey=69c943fd599c485fb32c02233b347491&"
            alt="Trusted partners logos"
            className={styles.partnersLogo}
          />
        </div>
      )}
    </section>
  );
};

export default About;
