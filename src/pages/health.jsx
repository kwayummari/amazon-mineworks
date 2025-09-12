import React from "react";
import styles from "../styles/Health.module.scss";

const Health = () => {
  const services = [
    {
      title: "Occupational Health",
      description:
        "Comprehensive occupational health services for mining and construction workers.",
      features: [
        "Pre-employment medical examinations",
        "Periodic health assessments",
        "Health surveillance programs",
        "Medical emergency response",
      ],
    },
    {
      title: "Health Risk Assessment",
      description:
        "Identification and assessment of health risks in the workplace.",
      features: [
        "Risk identification and analysis",
        "Exposure monitoring",
        "Health impact assessments",
        "Control measure recommendations",
      ],
    },
    {
      title: "Health Education",
      description:
        "Health education and awareness programs for employees and communities.",
      features: [
        "Workplace health training",
        "Disease prevention programs",
        "Health awareness campaigns",
        "Community health initiatives",
      ],
    },
    {
      title: "Medical Facilities",
      description: "On-site medical facilities and emergency medical services.",
      features: [
        "On-site medical clinics",
        "Emergency medical services",
        "First aid training",
        "Medical equipment maintenance",
      ],
    },
  ];

  const programs = [
    {
      name: "Employee Health Program",
      description: "Comprehensive health monitoring for all employees",
      coverage: "100% of workforce",
      status: "Active",
    },
    {
      name: "Community Health Initiative",
      description: "Health services for local communities",
      coverage: "5 surrounding villages",
      status: "Active",
    },
    {
      name: "Emergency Response",
      description: "24/7 emergency medical response",
      coverage: "All mine sites",
      status: "Active",
    },
  ];

  return (
    <div className={styles.health}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Health Services</h1>
          <p className={styles.heroDescription}>
            Comprehensive health services and programs ensuring the well-being
            of our employees and communities through occupational health,
            medical care, and health education.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Health Services</h2>
          <p className={styles.sectionDescription}>
            Complete health and medical services designed for mining and
            industrial environments.
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

      {/* Programs Section */}
      <div className={styles.programsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Health Programs</h2>
          <p className={styles.sectionDescription}>
            Active health programs and initiatives across our operations.
          </p>

          <div className={styles.programsGrid}>
            {programs.map((program, index) => (
              <div key={index} className={styles.programCard}>
                <div className={styles.programHeader}>
                  <h3>{program.name}</h3>
                  <span
                    className={`${styles.programStatus} ${
                      styles[program.status.toLowerCase()]
                    }`}
                  >
                    {program.status}
                  </span>
                </div>
                <p className={styles.programDescription}>
                  {program.description}
                </p>
                <div className={styles.programDetails}>
                  <div className={styles.programDetail}>
                    <span className={styles.detailLabel}>Coverage:</span>
                    <span className={styles.detailValue}>
                      {program.coverage}
                    </span>
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
            <h2>Committed to Health & Safety</h2>
            <p>
              Our health services ensure the well-being of our workforce and
              communities. Contact us to learn more about our health programs.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Learn More</button>
              <button className={styles.secondaryBtn}>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
