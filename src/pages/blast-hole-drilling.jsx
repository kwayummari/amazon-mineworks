import React from "react";
import styles from "../styles/BlastHoleDrilling.module.scss";

const BlastHoleDrilling = () => {
  const services = [
    {
      title: "Large Diameter Drilling",
      description:
        "High-capacity drilling for large-scale mining operations with diameters up to 12 inches.",
      features: [
        "Up to 12-inch diameter",
        "High penetration rates",
        "Precise hole placement",
        "Cost-effective operations",
      ],
    },
    {
      title: "Blast Pattern Design",
      description:
        "Expert blast pattern design to optimize fragmentation and minimize environmental impact.",
      features: [
        "3D modeling",
        "Vibration control",
        "Optimal fragmentation",
        "Safety protocols",
      ],
    },
    {
      title: "Safety Protocols",
      description:
        "Comprehensive safety measures ensuring zero-harm operations in all drilling activities.",
      features: [
        "Risk assessment",
        "Safety training",
        "Emergency procedures",
        "Compliance monitoring",
      ],
    },
    {
      title: "Production Optimization",
      description:
        "Advanced techniques to maximize drilling efficiency and minimize downtime.",
      features: [
        "Real-time monitoring",
        "Predictive maintenance",
        "Performance analytics",
        "Continuous improvement",
      ],
    },
  ];

  const equipment = [
    {
      name: "Atlas Copco ROC L8",
      type: "Rotary Drill Rig",
      capacity: "8-inch diameter",
      depth: "Up to 50 meters",
    },
    {
      name: "Sandvik D45KS",
      type: "Down-the-Hole Drill",
      capacity: "6-inch diameter",
      depth: "Up to 30 meters",
    },
    {
      name: "Caterpillar MD6640",
      type: "Rotary Drill Rig",
      capacity: "12-inch diameter",
      depth: "Up to 60 meters",
    },
  ];

  const projects = [
    {
      name: "Geita Gold Mine",
      location: "Tanzania",
      duration: "2020 - Present",
      holes: "15,000+",
      diameter: "6-8 inches",
      status: "Active",
    },
    {
      name: "Bulyanhulu Underground",
      location: "Tanzania",
      duration: "2019 - Present",
      holes: "8,500+",
      diameter: "4-6 inches",
      status: "Active",
    },
    {
      name: "North Mara Expansion",
      location: "Tanzania",
      duration: "2018 - 2022",
      holes: "12,000+",
      diameter: "6-10 inches",
      status: "Completed",
    },
  ];

  return (
    <div className={styles.blastHoleDrillingPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Blast Hole Drilling</h1>
          <p className={styles.heroDescription}>
            Precision blast hole drilling services for efficient and safe mining
            operations with state-of-the-art equipment and experienced
            professionals.
          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        {/* Services Section */}
        <div className={styles.servicesSection}>
          <h2>Our Blast Hole Drilling Services</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Section */}
        <div className={styles.equipmentSection}>
          <h2>Specialized Equipment</h2>
          <div className={styles.equipmentGrid}>
            {equipment.map((item, index) => (
              <div key={index} className={styles.equipmentCard}>
                <h3>{item.name}</h3>
                <p className={styles.equipmentType}>{item.type}</p>
                <div className={styles.equipmentSpecs}>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Capacity:</span>
                    <span className={styles.specValue}>{item.capacity}</span>
                  </div>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Max Depth:</span>
                    <span className={styles.specValue}>{item.depth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className={styles.projectsSection}>
          <h2>Recent Projects</h2>
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
                <p className={styles.projectLocation}>{project.location}</p>
                <div className={styles.projectDetails}>
                  <div className={styles.projectDetail}>
                    <span className={styles.detailLabel}>Duration:</span>
                    <span className={styles.detailValue}>
                      {project.duration}
                    </span>
                  </div>
                  <div className={styles.projectDetail}>
                    <span className={styles.detailLabel}>Holes Drilled:</span>
                    <span className={styles.detailValue}>{project.holes}</span>
                  </div>
                  <div className={styles.projectDetail}>
                    <span className={styles.detailLabel}>Diameter Range:</span>
                    <span className={styles.detailValue}>
                      {project.diameter}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Section */}
        <div className={styles.safetySection}>
          <div className={styles.safetyContent}>
            <h2>Safety Excellence</h2>
            <p>
              Our commitment to safety is unwavering, with zero lost-time
              injuries across all blast hole drilling operations.
            </p>
            <div className={styles.safetyFeatures}>
              <div className={styles.safetyFeature}>
                <i className="bi bi-shield-check"></i>
                <h4>Zero Harm Policy</h4>
                <p>Comprehensive safety protocols ensuring worker protection</p>
              </div>
              <div className={styles.safetyFeature}>
                <i className="bi bi-people"></i>
                <h4>Expert Team</h4>
                <p>Highly trained professionals with extensive experience</p>
              </div>
              <div className={styles.safetyFeature}>
                <i className="bi bi-gear"></i>
                <h4>Modern Equipment</h4>
                <p>State-of-the-art drilling rigs with safety features</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Project?</h2>
            <p>
              Contact us today to discuss your blast hole drilling requirements
              and get a customized quote.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Get Quote</button>
              <button className={styles.secondaryBtn}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlastHoleDrilling;
