import React from "react";
import styles from "../styles/ConstructionWorks.module.scss";

const ConstructionWorks = () => {
  const services = [
    {
      title: "Infrastructure Development",
      description: "Complete infrastructure development for mining operations including roads, bridges, and utilities.",
      features: [
        "Road construction and maintenance",
        "Bridge and culvert construction",
        "Utility installation and maintenance",
        "Drainage systems",
      ],
    },
    {
      title: "Site Preparation",
      description: "Comprehensive site preparation services for mining and construction projects.",
      features: [
        "Land clearing and grading",
        "Excavation and earthmoving",
        "Site leveling and preparation",
        "Environmental compliance",
      ],
    },
    {
      title: "Concrete Works",
      description: "High-quality concrete construction for foundations, structures, and infrastructure.",
      features: [
        "Foundation construction",
        "Structural concrete work",
        "Precast concrete elements",
        "Quality control and testing",
      ],
    },
    {
      title: "Steel Structures",
      description: "Design, fabrication, and installation of steel structures for mining operations.",
      features: [
        "Structural steel fabrication",
        "Building construction",
        "Tower and mast installation",
        "Welding and assembly",
      ],
    },
  ];

  const projects = [
    {
      name: "Mining Infrastructure Project",
      location: "Tanzania",
      duration: "2022 - 2024",
      scope: "Complete infrastructure development",
      status: "Active",
    },
    {
      name: "Industrial Complex Construction",
      location: "Namibia",
      duration: "2021 - 2023",
      scope: "Multi-building industrial facility",
      status: "Completed",
    },
    {
      name: "Road Network Development",
      location: "Tanzania",
      duration: "2020 - 2022",
      scope: "50km road network construction",
      status: "Completed",
    },
  ];

  return (
    <div className={styles.constructionWorks}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Construction Works</h1>
          <p className={styles.heroDescription}>
            Comprehensive construction services for mining and industrial projects
            with expertise in infrastructure development, site preparation, and
            structural construction.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Construction Services</h2>
          <p className={styles.sectionDescription}>
            We provide complete construction solutions tailored to mining and
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
            Showcasing our successful construction projects across Africa.
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
                    <span className={styles.detailValue}>{project.location}</span>
                  </div>
                  <div className={styles.projectDetail}>
                    <span className={styles.detailLabel}>Duration:</span>
                    <span className={styles.detailValue}>{project.duration}</span>
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
            <h2>Ready to Start Your Construction Project?</h2>
            <p>
              Contact us today to discuss your construction requirements and get a
              customized quote.
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

export default ConstructionWorks;
