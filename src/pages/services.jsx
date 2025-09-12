import React from "react";
import styles from "../styles/Services.module.scss";

const Services = () => {
  const services = [
    {
      category: "Drilling Services",
      icon: "bi bi-gear-fill",
      services: [
        {
          title: "Exploration Drilling",
          description:
            "Comprehensive exploration drilling services for mineral resource assessment and geological mapping.",
          features: [
            "Diamond drilling",
            "RC drilling",
            "Geological logging",
            "Core sampling",
          ],
        },
        {
          title: "Grade Control Drilling",
          description:
            "Precise grade control drilling to optimize mining operations and resource utilization.",
          features: [
            "Blast hole drilling",
            "Sampling programs",
            "Grade modeling",
            "Quality control",
          ],
        },
        {
          title: "Blast Hole Drilling",
          description:
            "Efficient blast hole drilling for mining operations with precision and safety.",
          features: [
            "Large diameter drilling",
            "Blast pattern design",
            "Safety protocols",
            "Production optimization",
          ],
        },
        {
          title: "Underground Drilling",
          description:
            "Specialized underground drilling services for deep mining operations.",
          features: [
            "Underground access",
            "Specialized equipment",
            "Safety systems",
            "Environmental control",
          ],
        },
        {
          title: "Geothermal Drilling",
          description:
            "Geothermal drilling services for renewable energy projects and exploration.",
          features: [
            "High-temperature drilling",
            "Geothermal assessment",
            "Environmental monitoring",
            "Energy efficiency",
          ],
        },
        {
          title: "Water Boreholes Drilling",
          description:
            "Water borehole drilling for water supply and environmental projects.",
          features: [
            "Water source identification",
            "Borehole construction",
            "Water quality testing",
            "Maintenance services",
          ],
        },
      ],
    },
    {
      category: "Mining Services",
      icon: "bi bi-hammer",
      services: [
        {
          title: "Construction Works",
          description:
            "Complete construction services for mining infrastructure and facilities.",
          features: [
            "Site preparation",
            "Infrastructure development",
            "Building construction",
            "Utilities installation",
          ],
        },
        {
          title: "Mine Earthworks",
          description:
            "Comprehensive earthworks services for mining operations and site development.",
          features: [
            "Excavation",
            "Grading",
            "Drainage systems",
            "Slope stabilization",
          ],
        },
        {
          title: "Load and Haul",
          description:
            "Efficient load and haul services for material transportation and logistics.",
          features: [
            "Fleet management",
            "Route optimization",
            "Safety protocols",
            "Cost efficiency",
          ],
        },
        {
          title: "Building Works",
          description:
            "Construction and maintenance of mining facilities and support buildings.",
          features: [
            "Office buildings",
            "Workshops",
            "Storage facilities",
            "Maintenance services",
          ],
        },
        {
          title: "Survey Services",
          description:
            "Professional surveying services for mining operations and land management.",
          features: [
            "Topographic surveys",
            "GPS mapping",
            "Volume calculations",
            "Boundary surveys",
          ],
        },
      ],
    },
    {
      category: "Safety & OHSEQ",
      icon: "bi bi-shield-check",
      services: [
        {
          title: "Occupational Health",
          description:
            "Comprehensive occupational health programs for mining workforce safety.",
          features: [
            "Health assessments",
            "Medical surveillance",
            "Hazard identification",
            "Preventive programs",
          ],
        },
        {
          title: "Safety Management",
          description:
            "Advanced safety management systems for mining operations.",
          features: [
            "Risk assessment",
            "Safety training",
            "Incident investigation",
            "Compliance monitoring",
          ],
        },
        {
          title: "Environmental Management",
          description:
            "Environmental protection and sustainability programs for mining operations.",
          features: [
            "Environmental monitoring",
            "Waste management",
            "Rehabilitation",
            "Compliance reporting",
          ],
        },
        {
          title: "Quality Management",
          description:
            "Quality assurance and control systems for mining operations and services.",
          features: [
            "Quality standards",
            "Process control",
            "Continuous improvement",
            "Certification",
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.servicesPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Services</h1>
          <p className={styles.heroDescription}>
            Comprehensive mining and drilling services delivered with
            excellence, safety, and environmental responsibility.
          </p>
        </div>
      </div>

      <div className={styles.servicesContainer}>
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.serviceCategory}>
            <div className={styles.categoryHeader}>
              <i className={`${styles.categoryIcon} ${category.icon}`}></i>
              <h2 className={styles.categoryTitle}>{category.category}</h2>
            </div>

            <div className={styles.servicesGrid}>
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className={styles.serviceCard}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>

                  <div className={styles.serviceFeatures}>
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <button className={styles.learnMoreBtn}>
                    Learn More
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Work With Us?</h2>
          <p>
            Contact us today to discuss your mining and drilling project
            requirements.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Get Quote</button>
            <button className={styles.secondaryBtn}>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
