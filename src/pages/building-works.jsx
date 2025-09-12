import React from "react";
import styles from "../styles/BuildingWorks.module.scss";

const BuildingWorks = () => {
  const services = [
    {
      title: "Industrial Buildings",
      description:
        "Construction of industrial facilities, workshops, and processing plants for mining operations.",
      features: [
        "Processing plant construction",
        "Workshop and maintenance facilities",
        "Storage and warehouse buildings",
        "Administrative buildings",
      ],
    },
    {
      title: "Residential Construction",
      description:
        "Quality residential construction for mining camps and employee housing.",
      features: [
        "Mining camp housing",
        "Employee accommodation",
        "Recreation facilities",
        "Community buildings",
      ],
    },
    {
      title: "Infrastructure Buildings",
      description:
        "Essential infrastructure buildings for mining operations and support services.",
      features: [
        "Power generation facilities",
        "Water treatment plants",
        "Communication centers",
        "Security facilities",
      ],
    },
    {
      title: "Renovation & Maintenance",
      description:
        "Building renovation, maintenance, and upgrade services for existing facilities.",
      features: [
        "Building renovations",
        "Maintenance services",
        "Upgrade projects",
        "Safety improvements",
      ],
    },
  ];

  const projects = [
    {
      name: "Mining Processing Plant",
      location: "Tanzania",
      duration: "2023 - 2024",
      scope: "Complete processing facility",
      status: "Active",
    },
    {
      name: "Employee Housing Complex",
      location: "Namibia",
      duration: "2022 - 2023",
      scope: "200-unit housing complex",
      status: "Completed",
    },
    {
      name: "Administrative Building",
      location: "Tanzania",
      duration: "2021 - 2022",
      scope: "Multi-story office building",
      status: "Completed",
    },
  ];

  return (
    <div className={styles.buildingWorks}>
      {/* Hero Section */}
      {/* <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Building Works</h1>
          <p className={styles.heroDescription}>
            Comprehensive building construction services for mining operations
            including industrial facilities, residential buildings, and
            infrastructure development.
          </p>
        </div>
      </div> */}

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Building Services</h2>
          <p className={styles.sectionDescription}>
            Complete building construction solutions tailored to mining and
            industrial requirements.
          </p>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className={styles.projectsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Recent Projects</h2>
          <p className={styles.sectionDescription}>
            Showcasing our successful building construction projects across
            Africa.
          </p>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3>{project.name}</h3>
                  <span
                    className={`${styles.projectStatus} ${
                      styles[project.status.toLowerCase()]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className={styles.projectDetails}>
                  <div className={styles.projectDetail}>
                    <span className={styles.detailLabel}>Location:</span>
                    <span className={styles.detailValue}>
                      {project.location}
                    </span>
                  </div>
                  <div className={styles.projectDetail}>
                    <span className={styles.detailLabel}>Duration:</span>
                    <span className={styles.detailValue}>
                      {project.duration}
                    </span>
                  </div>
                  <div className={styles.projectDetail}>
                    <span className={styles.detailLabel}>Scope:</span>
                    <span className={styles.detailValue}>{project.scope}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Build Your Project?</h2>
            <p>
              Contact us today to discuss your building construction
              requirements and get a customized quote.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Get Quote</button>
              <button className={styles.secondaryBtn}>View Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingWorks;
