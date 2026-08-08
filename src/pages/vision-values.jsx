import React from "react";
import { ourValuesData } from "../data/OurValuesData";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Reveal from "../components/ui/Reveal";
import Partners from "../components/Partners";
import styles from "../styles/VisionValues.module.scss";

const VisionValues = () => (
  <div className={styles.page}>
    <section className={styles.introSection}>
      <Container>
        <div className={styles.introGrid}>
          <Reveal>
            <Eyebrow>Our Vision</Eyebrow>
            <p className={styles.statement}>
              To be recognized as the industry's premier service provider of exploration and
              mining services, setting the standard with comprehensive solutions that prioritize
              safety, compliance and sustainability.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Our Mission</Eyebrow>
            <p className={styles.statement}>
              To help our customers achieve their business objectives through the application of
              our knowledge, experience and end-to-end service proposition.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>

    <section className={styles.valuesSection}>
      <Container>
        <h2 className={styles.valuesTitle}>{ourValuesData.title}</h2>
        <p className={styles.valuesLede}>{ourValuesData.description}</p>

        <div className={styles.valuesList}>
          {ourValuesData.values.map((value, index) => (
            <Reveal as="div" className={styles.valueRow} key={value.title} delay={index * 60}>
              <span className={styles.valueNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>

    <section className={styles.partnersSection}>
      <Container>
        <p className={styles.trustedBy}>Trusted By</p>
        <Partners />
      </Container>
    </section>
  </div>
);

export default VisionValues;
