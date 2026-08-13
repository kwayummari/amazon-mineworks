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

const locations = [
  { name: "Geita", detail: "Gold mining region, Mwanza" },
  { name: "Bulyanhulu", detail: "Underground gold operations, Shinyanga" },
  { name: "North Mara", detail: "Open-pit gold operations, Mara" },
];

const OperationsTeaser = () => (
  <section className={styles.section} id="operations">
    <div className={styles.photo}>
      <img loading="lazy" src="./images/gallery2.jpeg" alt="Amazon Mineworks equipment on an active mine site" />
      <span className={styles.photoScrim} />
    </div>

    <Container className={styles.inner}>
      <div className={styles.textCol}>
        <SectionHeading
          light
          eyebrow="Where We Work"
          title="One country. Total commitment."
          lede="Our operations center in East Africa serves gold mining projects across Tanzania, delivered with local expertise and global standards."
        />

        <ul className={styles.locations}>
          {locations.map((location) => (
            <li key={location.name}>
              <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
              <div>
                <span className={styles.locationName}>{location.name}</span>
                <span className={styles.locationDetail}>{location.detail}</span>
              </div>
            </li>
          ))}
        </ul>

        <Link to="/operations" className={styles.link}>
          <span>View Our Operations</span>
          <i className="bi bi-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>

      <Reveal className={styles.statCol} delay={100}>
        <StatRow stats={stats} light className={styles.stats} />
      </Reveal>
    </Container>
  </section>
);

export default OperationsTeaser;
