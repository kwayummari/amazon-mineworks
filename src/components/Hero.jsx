import React from "react";
import { Link } from "react-router-dom";
import Container from "./ui/Container";
import StatRow from "./ui/StatRow";
import styles from "../styles/Hero.module.scss";

const heroStats = [
  { value: "13+", label: "Years in Tanzania" },
  { value: "1,210+", label: "Employees" },
  { value: "3", label: "Divisions" },
];

const quickLinks = [
  { title: "Mining & Construction", link: "/operations" },
  { title: "Exploration Drilling", link: "/exploration-drilling" },
  { title: "Safety & OHSEQ", link: "/safety" },
];

const Hero = () => (
  <section className={styles.hero} aria-label="Introduction">
    <Container className={styles.inner}>
      <div className={styles.textCol}>
        <p className={styles.kicker}>Est. 2012 · Tanzania</p>
        <h1 className={styles.title}>
          Integrated mining, drilling &amp; construction services.
        </h1>
        <p className={styles.description}>
          Amazon Mineworks covers the full construction spectrum across three
          operating divisions — Building Construction, Civil Engineering, and
          Roads &amp; Earthworks — delivered to international mining-house
          standards.
        </p>
        <div className={styles.actions}>
          <Link to="/services" className={styles.primaryAction}>
            <span>Our Services</span>
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </Link>
          <Link to="/contact-us" className={styles.secondaryAction}>
            Contact Us
          </Link>
        </div>

        <StatRow stats={heroStats} className={styles.stats} />
      </div>

      <div className={styles.imageCol}>
        <div className={styles.imageFrame}>
          <img
            loading="eager"
            src="./images/carousel1.jpeg"
            alt="Amazon Mineworks heavy equipment on an active mine site"
            className={styles.image}
          />
        </div>

        <ul className={styles.quickLinks}>
          {quickLinks.map((item) => (
            <li key={item.title}>
              <Link to={item.link}>
                <span>{item.title}</span>
                <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </section>
);

export default Hero;
