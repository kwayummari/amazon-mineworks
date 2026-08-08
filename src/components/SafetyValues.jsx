import React from "react";
import { Link } from "react-router-dom";
import { ourValuesData } from "../data/OurValuesData";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import styles from "../styles/SafetyValues.module.scss";

const SafetyValues = () => (
  <section className={styles.section}>
    <Container>
      <div className={styles.grid}>
        <Reveal className={styles.imageCol}>
          <img
            loading="lazy"
            src="./images/WhatsApp Image 2024-08-29 at 16.22.46.jpeg"
            alt="Amazon Mineworks field crew on site"
            className={styles.image}
          />
          <div className={styles.imageCaption}>
            <i className="bi bi-shield-check" aria-hidden="true"></i>
            Zero Lost Time Injuries, Tanzania 2024
          </div>
        </Reveal>

        <div>
          <Eyebrow>Safety &amp; Values</Eyebrow>
          <h2 className={styles.title}>Safety isn&apos;t a department. It&apos;s how we operate.</h2>
          <p className={styles.lede}>{ourValuesData.description}</p>

          <ul className={styles.valueTags}>
            {ourValuesData.values.map((value) => (
              <li key={value.title}>{value.title}</li>
            ))}
          </ul>

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
        </div>
      </div>
    </Container>
  </section>
);

export default SafetyValues;
