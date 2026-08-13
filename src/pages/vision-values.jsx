import React from "react";
import { ourValuesData } from "../data/OurValuesData";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import styles from "../styles/VisionValues.module.scss";

const partners = [
  { image: "./images/BARRICK.png", alt: "Barrick" },
  { image: "./images/bhp.png", alt: "BHP" },
  { image: "./images/blackRock.png", alt: "BlackRock" },
  { image: "./images/katoro.png", alt: "Katoro Gold" },
  { image: "./images/peak.png", alt: "Peak Resources" },
  { image: "./images/shanta.png", alt: "Shanta Gold" },
  { image: "./images/preseus.png", alt: "Perseus Mining" },
  { image: "./images/armdale.png", alt: "Armadale" },
  { image: "./images/resources.png", alt: "Resources Partner" },
];

const VisionValues = () => (
  <div className={styles.page}>
    <section className={styles.statementSection}>
      <Container className={styles.statementGrid}>
        <div className={styles.statementCol}>
          <p className={styles.statementLabel}>Our Vision</p>
          <p className={styles.statementText}>
            To be recognized as the industry&apos;s premier service provider of exploration and
            mining services, setting the standard with comprehensive solutions that prioritize
            safety, compliance and sustainability.
          </p>
        </div>
        <div className={styles.statementDivider} aria-hidden="true"></div>
        <div className={styles.statementCol}>
          <p className={styles.statementLabel}>Our Mission</p>
          <p className={styles.statementText}>
            To help our customers achieve their business objectives through the application of
            our knowledge, experience and end-to-end service proposition.
          </p>
        </div>
      </Container>
    </section>

    <section className={styles.valuesSection}>
      <Container>
        <p className={styles.valuesLabel}>{ourValuesData.title}</p>
        <p className={styles.valuesLede}>{ourValuesData.description}</p>
      </Container>

      <div className={styles.valuesList}>
        {ourValuesData.values.map((value, index) => (
          <Reveal as="div" className={styles.valueRow} key={value.title} delay={index * 50}>
            <Container className={styles.valueRowInner}>
              <div className={styles.valueHead}>
                <span className={styles.valueNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
              </div>
              <p className={styles.valueDescription}>{value.description}</p>
            </Container>
          </Reveal>
        ))}
      </div>
    </section>

    <section className={styles.partnersSection}>
      <Container>
        <p className={styles.trustedBy}>Trusted By</p>
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.alt}-${index}`} className={styles.partnerItem}>
                <img src={partner.image} alt={partner.alt} className={styles.partnerLogo} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  </div>
);

export default VisionValues;
