import React from "react";
import styles from "../styles/Environment.module.scss";

const Environment = () => {
  const services = [
    {
      title: "Environmental Monitoring",
      description:
        "Comprehensive environmental monitoring and assessment services.",
      features: [
        "Air quality monitoring",
        "Water quality testing",
        "Soil contamination assessment",
        "Noise level monitoring",
      ],
    },
    {
      title: "Environmental Impact Assessment",
      description:
        "Detailed environmental impact assessments for mining projects.",
      features: [
        "EIA studies and reports",
        "Environmental baseline studies",
        "Impact mitigation planning",
        "Regulatory compliance",
      ],
    },
    {
      title: "Rehabilitation Services",
      description: "Environmental rehabilitation and restoration services.",
      features: [
        "Land rehabilitation",
        "Vegetation restoration",
        "Water body restoration",
        "Biodiversity conservation",
      ],
    },
    {
      title: "Waste Management",
      description: "Comprehensive waste management and disposal services.",
      features: [
        "Waste classification and handling",
        "Recycling programs",
        "Hazardous waste disposal",
        "Waste reduction initiatives",
      ],
    },
  ];

  const initiatives = [
    {
      name: "Carbon Neutral Initiative",
      description: "Achieving carbon neutrality across all operations",
      target: "2025",
      status: "In Progress",
    },
    {
      name: "Water Conservation Program",
      description: "Reducing water consumption and improving efficiency",
      target: "Ongoing",
      status: "Active",
    },
    {
      name: "Biodiversity Protection",
      description: "Protecting and enhancing local biodiversity",
      target: "Ongoing",
      status: "Active",
    },
  ];

  return (
    <div className={styles.environment}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Environmental Services</h1>
          <p className={styles.heroDescription}>
            Comprehensive environmental services ensuring sustainable mining
            operations through monitoring, assessment, rehabilitation, and
            conservation initiatives.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Environmental Services</h2>
          <p className={styles.sectionDescription}>
            Complete environmental solutions for sustainable mining and
            industrial operations.
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

      {/* Initiatives Section */}
      <div className={styles.initiativesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Environmental Initiatives</h2>
          <p className={styles.sectionDescription}>
            Our commitment to environmental sustainability and conservation.
          </p>

          <div className={styles.initiativesGrid}>
            {initiatives.map((initiative, index) => (
              <div key={index} className={styles.initiativeCard}>
                <div className={styles.initiativeHeader}>
                  <h3>{initiative.name}</h3>
                  <span
                    className={`${styles.initiativeStatus} ${
                      styles[
                        initiative.status.toLowerCase().replace(/\s+/g, "")
                      ]
                    }`}
                  >
                    {initiative.status}
                  </span>
                </div>
                <p className={styles.initiativeDescription}>
                  {initiative.description}
                </p>
                <div className={styles.initiativeDetails}>
                  <div className={styles.initiativeDetail}>
                    <span className={styles.detailLabel}>Target:</span>
                    <span className={styles.detailValue}>
                      {initiative.target}
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
            <h2>Committed to Environmental Excellence</h2>
            <p>
              We are dedicated to protecting the environment and ensuring
              sustainable operations. Contact us to learn more about our
              environmental initiatives.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Learn More</button>
              <button className={styles.secondaryBtn}>View Reports</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;
