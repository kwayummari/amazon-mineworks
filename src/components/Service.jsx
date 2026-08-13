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
    title: "Fully Integrated Mining Services",
    description:
      "From first-stage exploration drilling to delivery of ore to the mill, we work across every facet of a project.",
    image: "./images/image1.jpeg",
    featured: true,
  },
  {
    number: "02",
    link: "/construction-works",
    title: "Road Construction",
    description:
      "Planning, site preparation, earthwork, sub-base and base course construction, and pavement.",
    image: "./images/image2.jpeg",
  },
  {
    number: "03",
    link: "/building-works",
    title: "Bridges Construction",
    description:
      "Engineered from site inspection through foundation and piers to carry live and dead loads.",
    image: "./images/image3.jpeg",
  },
  {
    number: "04",
    link: "/mine-earthworks",
    title: "Railway Construction",
    description:
      "Track laying and ballasting supported by the latest technology and engineering know-how.",
    image: "./images/image4.jpeg",
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

      <div className={styles.grid}>
        {capabilities.map((item, index) => (
          <Reveal
            as="div"
            key={item.number}
            delay={index * 60}
            className={item.featured ? styles.featuredCell : styles.cell}
          >
            <Link
              to={item.link}
              className={`${styles.card} ${item.featured ? styles.featured : ""}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span className={styles.cardScrim} />
              <span className={styles.cardNumber}>{item.number}</span>
              <span className={styles.cardArrow}>
                <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
              </span>
              <span className={styles.cardBody}>
                <span className={styles.cardTitle}>{item.title}</span>
                <span className={styles.cardDescription}>{item.description}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);

export default Services;
