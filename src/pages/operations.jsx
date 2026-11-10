import React from "react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import StatRow from "../components/ui/StatRow";
import Reveal from "../components/ui/Reveal";
import SafetyCallout from "../components/SafetyCallout";
import styles from "../styles/Operations.module.scss";

const tanzania = {
  capital: "Dar es Salaam",
  established: "2018",
  description:
    "Our operations center in East Africa, serving mining projects across Tanzania and neighboring countries.",
  stats: [
    { value: "450", label: "Employees" },
    { value: "12", label: "Active Projects" },
    { value: "6", label: "Years Operating" },
    { value: "100%", label: "Safety Record" },
  ],
  projects: [
    { name: "Geita Gold Mine", type: "Gold Mining", status: "Active", duration: "2020 – Present", description: "Comprehensive drilling and mining services for one of Tanzania's largest gold mines.", services: ["Exploration Drilling", "Grade Control", "Blast Hole Drilling", "Environmental Monitoring"] },
    { name: "Bulyanhulu Gold Mine", type: "Gold Mining", status: "Active", duration: "2019 – Present", description: "Underground mining operations with focus on safety and efficiency.", services: ["Underground Drilling", "Mine Development", "Safety Management", "Load & Haul"] },
    { name: "North Mara Gold Mine", type: "Gold Mining", status: "Completed", duration: "2018 – 2022", description: "Successfully completed exploration and development phase.", services: ["Exploration Drilling", "Resource Assessment", "Environmental Studies", "Community Development"] },
  ],
  facilities: [
    { name: "Main Office Complex", icon: "bi-building" },
    { name: "Equipment Maintenance Facility", icon: "bi-tools" },
    { name: "Training Center", icon: "bi-mortarboard" },
    { name: "Medical Clinic", icon: "bi-heart-pulse" },
    { name: "Employee Housing", icon: "bi-house-door" },
  ],
  safety: "Zero Lost Time Injuries in 2024",
};

const Operations = () => (
  <div className={styles.page}>
    <section className={styles.introSection}>
      <Container className={styles.introGrid}>
        <div>
          <SectionHeading
            eyebrow="Where We Work"
            title="One country. Total commitment."
            lede={`${tanzania.description} Capital: ${tanzania.capital} · Established ${tanzania.established}.`}
          />
          <StatRow stats={tanzania.stats} className={styles.globalStats} />
        </div>
        <div className={styles.introImage}>
          <img loading="eager" src="./images/LImage1.png" alt="Amazon Mineworks operations site in Tanzania" />
        </div>
      </Container>
    </section>

    <section className={styles.locationSection}>
      <Container>
        <div className={styles.projectsBlock}>
          <h3 className={styles.blockTitle}>Current Projects</h3>
          <div className={styles.projectsGrid}>
            {tanzania.projects.map((project, index) => (
              <Reveal as="div" className={styles.projectCard} key={project.name} delay={index * 60}>
                <div className={styles.projectHead}>
                  <h4>{project.name}</h4>
                  <span className={`${styles.status} ${project.status === "Active" ? styles.statusActive : styles.statusCompleted}`}>
                    {project.status}
                  </span>
                </div>
                <p className={styles.projectMeta}>{project.type} &middot; {project.duration}</p>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.serviceTags}>
                  {project.services.map((service) => (
                    <span key={service}>{service}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className={styles.facilitiesBlock}>
          <h3 className={styles.blockTitle}>Facilities &amp; Infrastructure</h3>
          <div className={styles.facilitiesGrid}>
            {tanzania.facilities.map((facility) => (
              <div className={styles.facilityChip} key={facility.name}>
                <i className={`bi ${facility.icon}`} aria-hidden="true"></i>
                <span>{facility.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>

    <SafetyCallout
      eyebrow="Safety Excellence"
      text={tanzania.safety}
      linkTo="/safety"
      linkLabel="Our Safety Standards"
    />
  </div>
);

export default Operations;
