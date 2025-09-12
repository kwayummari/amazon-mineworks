import React from "react";
import styles from "../styles/QualityManagement.module.scss";

const QualityManagement = () => {
  const services = [
    {
      title: "Quality Assurance",
      description:
        "Comprehensive quality assurance programs ensuring consistent standards across all operations.",
      features: [
        "Quality control procedures",
        "Process standardization",
        "Performance monitoring",
        "Continuous improvement",
      ],
    },
    {
      title: "ISO Certification",
      description:
        "Maintaining and implementing ISO quality management standards.",
      features: [
        "ISO 9001:2015 certification",
        "Quality management systems",
        "Audit and compliance",
        "Documentation management",
      ],
    },
    {
      title: "Testing & Inspection",
      description:
        "Rigorous testing and inspection services for materials and processes.",
      features: [
        "Material testing",
        "Process inspection",
        "Quality verification",
        "Non-destructive testing",
      ],
    },
    {
      title: "Training & Development",
      description: "Quality training programs for employees and management.",
      features: [
        "Quality awareness training",
        "Process training",
        "Management development",
        "Certification programs",
      ],
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management Systems",
      scope: "All operations",
      status: "Certified",
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management Systems",
      scope: "Environmental operations",
      status: "Certified",
    },
    {
      name: "OHSAS 18001:2007",
      description: "Occupational Health and Safety",
      scope: "Safety management",
      status: "Certified",
    },
  ];

  return (
    <div className={styles.qualityManagement}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Quality Management</h1>
          <p className={styles.heroDescription}>
            Comprehensive quality management systems ensuring excellence in all
            our operations through rigorous standards, continuous improvement,
            and international certifications.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Quality Services</h2>
          <p className={styles.sectionDescription}>
            Complete quality management solutions for mining and industrial
            operations.
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

      {/* Certifications Section */}
      <div className={styles.certificationsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Certifications</h2>
          <p className={styles.sectionDescription}>
            International quality and management system certifications.
          </p>

          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <div key={index} className={styles.certificationCard}>
                <div className={styles.certificationHeader}>
                  <h3>{cert.name}</h3>
                  <span
                    className={`${styles.certificationStatus} ${
                      styles[cert.status.toLowerCase()]
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
                <p className={styles.certificationDescription}>
                  {cert.description}
                </p>
                <div className={styles.certificationDetails}>
                  <div className={styles.certificationDetail}>
                    <span className={styles.detailLabel}>Scope:</span>
                    <span className={styles.detailValue}>{cert.scope}</span>
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
            <h2>Committed to Quality Excellence</h2>
            <p>
              Our quality management systems ensure the highest standards in all
              our operations. Contact us to learn more about our quality
              programs.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Learn More</button>
              <button className={styles.secondaryBtn}>View Certificates</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityManagement;
