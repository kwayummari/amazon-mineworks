import React from "react";
import { Link } from "react-router-dom";
import { ourValuesData } from "../data/OurValuesData";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import styles from "../styles/SafetyValues.module.scss";

const icons = {
  SAFETY: "bi-shield-check",
  RESPECT: "bi-hand-thumbs-up",
  UNITY: "bi-people-fill",
  INTEGRITY: "bi-award",
  SUSTAINABILITY: "bi-tree",
  EXCELLENCE: "bi-star",
};

const SafetyValues = () => (
  <section className={styles.section}>
    <Container>
      <div className={styles.intro}>
        <Reveal className={styles.introText}>
          <Eyebrow>Safety &amp; Values</Eyebrow>
          <h2 className={styles.title}>Safety isn&apos;t a department. It&apos;s how we operate.</h2>
          <p className={styles.lede}>{ourValuesData.description}</p>
          <div className={styles.links}>
            <Link to="/safety" className={styles.link}>
              <span>Our Safety Standards</span>
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/vision-values" className={styles.link}>
              <span>Vision &amp; Values</span>
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </Reveal>
      </div>
    </Container>

    <Reveal className={styles.banner} delay={80}>
      <img
        loading="lazy"
        src="./images/WhatsApp Image 2024-08-29 at 16.22.46.jpeg"
        alt="Amazon Mineworks field crew on site"
        className={styles.bannerImage}
      />
      <div className={styles.bannerCaption}>
        <i className="bi bi-shield-check" aria-hidden="true"></i>
        Zero Lost Time Injuries, Tanzania 2024
      </div>
    </Reveal>

    <Container>
      <ul className={styles.valueGrid}>
        {ourValuesData.values.map((value, index) => (
          <Reveal as="li" key={value.title} delay={index * 60}>
            <i className={`bi ${icons[value.title] || "bi-check-circle"}`} aria-hidden="true"></i>
            <span className={styles.valueTitle}>{value.title}</span>
            <p className={styles.valueDescription}>{value.description}</p>
          </Reveal>
        ))}
      </ul>
    </Container>
  </section>
);

export default SafetyValues;
