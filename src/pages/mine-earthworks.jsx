import React from "react";
import styles from "../styles/MineEarthworks.module.scss";

const MineEarthworks = () => {
  const services = [
    {
      title: "Excavation Services",
      description: "Large-scale excavation operations for mining and construction projects.",
      features: [
        "Bulk earthmoving operations",
        "Trenching and ditching",
        "Pond and reservoir construction",
        "Waste dump management",
      ],
    },
    {
      title: "Grading and Leveling",
      description: "Precision grading and leveling services for optimal site preparation.",
      features: [
        "Site grading and leveling",
        "Slope stabilization",
        "Drainage system installation",
        "Erosion control measures",
      ],
    },
    {
      title: "Haul Road Construction",
      description: "Construction and maintenance of haul roads for mining operations.",
      features: [
        "Heavy-duty road construction",
        "Road maintenance and repair",
        "Drainage system installation",
        "Safety barrier installation",
      ],
    },
    {
      title: "Rehabilitation Services",
      description: "Environmental rehabilitation and land restoration services.",
      features: [
        "Land rehabilitation",
        "Vegetation restoration",
        "Soil stabilization",
        "Environmental compliance",
      ],
    },
  ];

  const equipment = [
    {
      name: "Caterpillar 777D",
      type: "Haul Truck",
      capacity: "100 tons",
      applications: ["Material transport", "Waste removal"],
    },
    {
      name: "Komatsu PC8000",
      type: "Excavator",
      capacity: "800 tons",
      applications: ["Bulk excavation", "Loading operations"],
    },
    {
      name: "Caterpillar D11T",
      type: "Bulldozer",
      capacity: "104 tons",
      applications: ["Grading", "Pushing operations"],
    },
  ];

  return (
    <div className={styles.mineEarthworks}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Mine Earthworks</h1>
          <p className={styles.heroDescription}>
            Specialized earthworks services for mining operations including
            excavation, grading, haul road construction, and environmental
            rehabilitation.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Earthworks Services</h2>
          <p className={styles.sectionDescription}>
            Comprehensive earthworks solutions designed for mining and industrial
            applications.
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
          <h2 className={styles.sectionTitle}>Our Equipment Fleet</h2>
          <p className={styles.sectionDescription}>
            State-of-the-art heavy machinery for efficient earthworks operations.
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
                    <span className={styles.detailLabel}>Capacity:</span>
                    <span className={styles.detailValue}>{item.capacity}</span>
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
            <h2>Ready for Your Earthworks Project?</h2>
            <p>
              Contact us today to discuss your earthworks requirements and get a
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

export default MineEarthworks;
