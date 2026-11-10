import React, { useState, useEffect } from "react";
import databaseService from "../services/realMySQLService";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import StatRow from "./ui/StatRow";
import Reveal from "./ui/Reveal";
import IsoBadge from "./ui/IsoBadge";
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

const stats = [
  { value: "2012", label: "Founded" },
  { value: "5", label: "Subsidiaries" },
  { value: "1,210+", label: "Employees" },
  { value: "3", label: "Commodities" },
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
        const savedPartners = JSON.parse(localStorage.getItem("partners") || "[]");
        setPartners(savedPartners);
      }
    };

    loadPartners();
  }, []);

  const partnerList = partners.length > 0 ? partners : defaultPartners;

  return (
    <section className={styles.about}>
      <Container>
        <Reveal className={styles.statement}>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className={styles.title}>
            A fully integrated mining, drilling &amp; construction partner —
            engineered for the standards international mining houses expect
            from a contractor of record.
          </h2>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.textCol} delay={60}>
            <p className={styles.description}>
              Amazon Mineworks has operated across Tanzania since 2012,
              covering the full construction spectrum across three operating
              divisions — Building Construction, Civil Engineering, and Roads
              &amp; Earthworks.
            </p>
            <IsoBadge className={styles.isoBadge} />
          </Reveal>
          <Reveal className={styles.statCol} delay={120}>
            <StatRow stats={stats} className={styles.stats} />
          </Reveal>
        </div>
      </Container>

      <Reveal className={styles.breakBanner} delay={80}>
        <img
          loading="lazy"
          src="./images/gallery1.jpeg"
          alt="Amazon Mineworks crew and equipment on a Tanzanian mine site"
          className={styles.breakImage}
        />
        <div className={styles.breakCaption}>
          <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
          Site operations — Geita Region, Tanzania
        </div>
      </Reveal>

      <Container>
        <Reveal className={styles.partnersBlock} delay={80}>
          <p className={styles.trustedBy}>Trusted By</p>
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              {[...partnerList, ...partnerList].map((partner, index) => (
                <div key={`${partner.id}-${index}`} className={styles.partnerItem}>
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className={styles.partnerLogo}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default About;
