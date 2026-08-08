import React from "react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import StatRow from "../components/ui/StatRow";
import Reveal from "../components/ui/Reveal";
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
  facilities: ["Main Office Complex", "Equipment Maintenance Facility", "Training Center", "Medical Clinic", "Employee Housing"],
  safety: "Zero Lost Time Injuries in 2024",
};

const Operations = () => (
  <div className={styles.page}>
    <section className={styles.introSection}>
      <Container>
        <SectionHeading
          eyebrow="Where We Work"
          title="One country. Total commitment."
          lede={`${tanzania.description} Capital: ${tanzania.capital} · Established ${tanzania.established}.`}
        />
        <StatRow stats={tanzania.stats} className={styles.globalStats} />
      </Container>
    </section>

    <section className={styles.locationSection}>
      <Container>
        <Reveal>
          <div className={styles.projectsBlock}>
            <h3 className={styles.blockTitle}>Current Projects</h3>
            <div className={styles.projectsList}>
              {tanzania.projects.map((project) => (
                <div className={styles.projectRow} key={project.name}>
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
                </div>
              ))}
            </div>
          </div>

          <div className={styles.detailsGrid}>
            <div>
              <h3 className={styles.blockTitle}>Facilities &amp; Infrastructure</h3>
              <ul className={styles.facilitiesList}>
                {tanzania.facilities.map((facility) => (
                  <li key={facility}>{facility}</li>
                ))}
              </ul>
            </div>
            <div className={styles.safetyCard}>
              <i className="bi bi-shield-check" aria-hidden="true"></i>
              <div>
                <h3 className={styles.blockTitle}>Safety Excellence</h3>
                <p>{tanzania.safety}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  </div>
);

export default Operations;
