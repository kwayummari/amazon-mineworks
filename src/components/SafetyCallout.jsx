import React from "react";
import { Link } from "react-router-dom";
import Container from "./ui/Container";
import styles from "../styles/SafetyCallout.module.scss";

const SafetyCallout = ({
  eyebrow = "Safety Risk Leadership Walk",
  text = "Our SRLW program facilitates direct, structured communication about tasks and workplace risks between our field teams and management on every project — including this one.",
  linkTo = "/safety",
  linkLabel = "Our Safety Standards",
}) => (
  <section className={styles.section}>
    <Container>
      <div className={styles.block}>
        <div>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <p className={styles.text}>{text}</p>
        </div>
        <Link to={linkTo} className={styles.link}>
          <span>{linkLabel}</span>
          <i className="bi bi-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </Container>
  </section>
);

export default SafetyCallout;
