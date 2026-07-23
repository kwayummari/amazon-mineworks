import React, { useState, useEffect } from "react";
import databaseService from "../services/realMySQLService";
import styles from "./../styles/About.module.scss";

const defaultPartners = [
  { id: 1, image: "./images/BARRICK.png", alt: "Barrick" },
  { id: 2, image: "./images/bhp.png", alt: "BHP" },
  { id: 3, image: "./images/blackRock.png", alt: "BlackRock" },
  { id: 4, image: "./images/katoro.png", alt: "Katoro Gold" },
  { id: 5, image: "./images/peak.png", alt: "Peak Resources" },
  { id: 6, image: "./images/shanta.png", alt: "Shanta Gold" },
  { id: 7, image: "./images/preseus.png", alt: "Perseus Mining" },
  { id: 8, image: "./images/armdale.png", alt: "Armadale" },
  { id: 9, image: "./images/volt.png", alt: "Volt Resources" },
  { id: 10, image: "./images/resources.png", alt: "Resources Partner" },
];

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
          <p className={styles.eyebrow}>Who We Are</p>
          <h2 className={styles.title}>Amazon Mineworks</h2>
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
          src="./images/carousel2.jpeg"
          alt="Amazon Mineworks operations"
          className={styles.image}
        />
        <p className={styles.trustedBy1}>Trusted by</p>
      </div>

      <div className={styles.partnersContainer}>
        <div className={styles.partnersGrid}>
          {(partners.length > 0 ? partners : defaultPartners).map(
            (partner) => (
              <div key={partner.id} className={styles.partnerItem}>
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className={styles.partnerLogo}
                  loading="lazy"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
