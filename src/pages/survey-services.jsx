import React from "react";
import styles from "../styles/SurveyServices.module.scss";

const SurveyServices = () => {
  const services = [
    {
      title: "Topographic Surveys",
      description:
        "Comprehensive topographic surveys for mining and construction projects.",
      features: [
        "Land surveying and mapping",
        "Elevation and contour surveys",
        "Boundary surveys",
        "As-built surveys",
      ],
    },
    {
      title: "Mining Surveys",
      description:
        "Specialized surveying services for mining operations and exploration.",
      features: [
        "Drill hole surveying",
        "Pit and dump surveys",
        "Volume calculations",
        "Grade control surveys",
      ],
    },
    {
      title: "GPS & GIS Services",
      description:
        "Advanced GPS and GIS services for accurate positioning and mapping.",
      features: [
        "GPS positioning services",
        "GIS mapping and analysis",
        "Coordinate system conversions",
        "Data management systems",
      ],
    },
    {
      title: "Engineering Surveys",
      description:
        "Precision engineering surveys for infrastructure and construction projects.",
      features: [
        "Alignment surveys",
        "Setting out services",
        "Deformation monitoring",
        "Quality control surveys",
      ],
    },
  ];

  const equipment = [
    {
      name: "Leica TS16",
      type: "Total Station",
      accuracy: "±1mm + 1ppm",
      applications: ["Precision surveying", "Construction layout"],
    },
    {
      name: "Trimble R10",
      type: "GNSS Receiver",
      accuracy: "±8mm + 1ppm",
      applications: ["GPS surveying", "Real-time positioning"],
    },
    {
      name: "Leica ScanStation P40",
      type: "3D Laser Scanner",
      accuracy: "±3mm @ 50m",
      applications: ["3D scanning", "As-built documentation"],
    },
  ];

  return (
    <div className={styles.surveyServices}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Survey Services</h1>
          <p className={styles.heroDescription}>
            Professional surveying services for mining, construction, and
            engineering projects with state-of-the-art equipment and expertise.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Survey Services</h2>
          <p className={styles.sectionDescription}>
            Comprehensive surveying solutions for accurate measurement and
            mapping services.
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

      {/* Equipment Section */}
      <div className={styles.equipmentSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Equipment</h2>
          <p className={styles.sectionDescription}>
            State-of-the-art surveying equipment for accurate and reliable
            measurements.
          </p>

          <div className={styles.equipmentGrid}>
            {equipment.map((item, index) => (
              <div key={index} className={styles.equipmentCard}>
                <h3 className={styles.equipmentName}>{item.name}</h3>
                <div className={styles.equipmentDetails}>
                  <div className={styles.equipmentDetail}>
                    <span className={styles.detailLabel}>Type:</span>
                    <span className={styles.detailValue}>{item.type}</span>
                  </div>
                  <div className={styles.equipmentDetail}>
                    <span className={styles.detailLabel}>Accuracy:</span>
                    <span className={styles.detailValue}>{item.accuracy}</span>
                  </div>
                  <div className={styles.equipmentDetail}>
                    <span className={styles.detailLabel}>Applications:</span>
                    <span className={styles.detailValue}>
                      {item.applications.join(", ")}
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
            <h2>Need Professional Surveying?</h2>
            <p>
              Contact us today to discuss your surveying requirements and get a
              customized solution.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Get Quote</button>
              <button className={styles.secondaryBtn}>View Equipment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyServices;
