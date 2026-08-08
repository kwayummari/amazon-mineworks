import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import styles from "../styles/Services.module.scss";

const categories = [
  {
    category: "Drilling Services",
    description:
      "From first-stage exploration to grade control and production drilling, delivered with precision equipment and experienced crews.",
    services: [
      { title: "Exploration Drilling", link: "/exploration-drilling", description: "Diamond and RC drilling for mineral resource assessment and geological mapping." },
      { title: "Grade Control Drilling", link: "/grade-control-drilling", description: "Precise grade control drilling to optimize mining operations and resource utilization." },
      { title: "Blast Hole Drilling", link: "/blast-hole-drilling", description: "Efficient blast hole drilling for mining operations with precision and safety." },
      { title: "Underground Drilling", link: "/underground-drilling", description: "Specialized underground drilling services for deep mining operations." },
      { title: "Geothermal Drilling", link: "/geothermal-drilling", description: "Geothermal drilling services for renewable energy projects and exploration." },
      { title: "Water Boreholes Drilling", link: "/water-borehole-drilling", description: "Water borehole drilling for water supply and environmental projects." },
    ],
  },
  {
    category: "Mining Services",
    description:
      "Full-spectrum construction and earthmoving capability supporting active mine sites, from site prep to haul roads.",
    services: [
      { title: "Construction Works", link: "/construction-works", description: "Complete construction services for mining infrastructure and facilities." },
      { title: "Mine Earthworks", link: "/mine-earthworks", description: "Comprehensive earthworks services for mining operations and site development." },
      { title: "Load and Haul", link: "/load-and-haul", description: "Efficient load and haul services for material transportation and logistics." },
      { title: "Building Works", link: "/building-works", description: "Construction and maintenance of mining facilities and support buildings." },
      { title: "Survey Services", link: "/survey-services", description: "Professional surveying services for mining operations and land management." },
    ],
  },
  {
    category: "Safety & OHSEQ",
    description:
      "Occupational health, safety, environmental and quality systems embedded in every project we run.",
    services: [
      { title: "Occupational Health", link: "/health", description: "Comprehensive occupational health programs for mining workforce safety." },
      { title: "Safety Management", link: "/safety", description: "Advanced safety management systems for mining operations." },
      { title: "Environmental Management", link: "/environment", description: "Environmental protection and sustainability programs for mining operations." },
      { title: "Quality Management", link: "/quality-management", description: "Quality assurance and control systems for mining operations and services." },
    ],
  },
];

const Services = () => (
  <div className={styles.page}>
    <section className={styles.introSection}>
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Integrated mining, drilling and construction services."
          lede="Comprehensive mining and drilling services delivered with excellence, safety, and environmental responsibility."
        />
      </Container>
    </section>

    {categories.map((cat, catIndex) => (
      <section
        className={`${styles.categorySection} ${catIndex % 2 === 1 ? styles.categorySectionAlt : ""}`}
        key={cat.category}
      >
        <Container>
          <div className={styles.categoryHeader}>
            <h2 className={styles.categoryTitle}>{cat.category}</h2>
            <p className={styles.categoryDescription}>{cat.description}</p>
          </div>
          <div className={styles.serviceList}>
            {cat.services.map((service, index) => (
              <Reveal as="div" key={service.link} delay={index * 50}>
                <Link to={service.link} className={styles.serviceRow}>
                  <span className={styles.serviceNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.serviceTitle}>{service.title}</span>
                  <span className={styles.serviceDescription}>{service.description}</span>
                  <span className={styles.serviceArrow}>
                    <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    ))}
  </div>
);

export default Services;
