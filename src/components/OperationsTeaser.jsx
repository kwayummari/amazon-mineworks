import React from "react";
import { Link } from "react-router-dom";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import StatRow from "./ui/StatRow";
import Reveal from "./ui/Reveal";
import styles from "../styles/OperationsTeaser.module.scss";

const stats = [
  { value: "12", label: "Active Projects" },
  { value: "450", label: "Employees" },
  { value: "6", label: "Years Operating" },
  { value: "100%", label: "Safety Record" },
];

const OperationsTeaser = () => (
  <section className={styles.section} id="operations">
    <Container>
      <SectionHeading
        light
        eyebrow="Where We Work"
        title="One country. Total commitment."
        lede="Our operations center in East Africa serves gold mining projects across Tanzania — including Geita, Bulyanhulu and North Mara — delivered with local expertise and global standards."
      />

      <Reveal>
        <StatRow stats={stats} light className={styles.stats} />
      </Reveal>

      <Link to="/operations" className={styles.link}>
        <span>View Our Operations</span>
        <i className="bi bi-arrow-right" aria-hidden="true"></i>
      </Link>
    </Container>
  </section>
);

export default OperationsTeaser;
