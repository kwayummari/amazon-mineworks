import React from "react";
import { Link } from "react-router-dom";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import styles from "./../styles/Service.module.scss";

const capabilities = [
  {
    number: "01",
    link: "/services",
    title: "Fully Integrated Range of Mining Services",
    description:
      "We have the capacity to offer a fully integrated mining services solution from first stage exploration drilling to delivery of ore to the mill, working across all facets of your project.",
  },
  {
    number: "02",
    link: "/construction-works",
    title: "Road Construction",
    description:
      "Road construction involves several phases, including planning, site preparation, earthwork, sub-base and base course construction, and pavement.",
  },
  {
    number: "03",
    link: "/building-works",
    title: "Bridges Construction",
    description:
      "From site inspection and planning to setting the foundation and installing piers, our bridges are engineered to carry live and dead loads and resist natural forces.",
  },
  {
    number: "04",
    link: "/mine-earthworks",
    title: "Railway Construction",
    description:
      "Track laying and ballasting capability supported by the latest technology, management and engineering know-how — for railways, metro systems and light rail.",
  },
];

const Services = () => (
  <section className={styles.services}>
    <Container>
      <div className={styles.header}>
        <SectionHeading eyebrow="What We Do" title="Our Capabilities" />
        <Link to="/services" className={styles.headerLink}>
          <span>View All Services</span>
          <i className="bi bi-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>

      <div className={styles.list}>
        {capabilities.map((item, index) => (
          <Reveal as="div" key={item.number} delay={index * 60}>
            <Link to={item.link} className={styles.row}>
              <span className={styles.number}>{item.number}</span>
              <span className={styles.rowTitle}>{item.title}</span>
              <span className={styles.rowDescription}>{item.description}</span>
              <span className={styles.rowArrow}>
                <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);

export default Services;
