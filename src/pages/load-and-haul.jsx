import React from "react";
import styles from "../styles/LoadAndHaul.module.scss";

const LoadAndHaul = () => {
  const services = [
    {
      title: "Material Transport",
      description:
        "Efficient transportation of materials, ore, and waste products across mining sites.",
      features: [
        "Ore transportation",
        "Waste material hauling",
        "Equipment transport",
        "Fuel and supply delivery",
      ],
    },
    {
      title: "Fleet Management",
      description:
        "Comprehensive fleet management services for optimal vehicle utilization.",
      features: [
        "Vehicle maintenance scheduling",
        "Driver training programs",
        "Route optimization",
        "Performance monitoring",
      ],
    },
    {
      title: "Loading Operations",
      description:
        "Professional loading services using state-of-the-art equipment.",
      features: [
        "Automated loading systems",
        "Manual loading operations",
        "Quality control measures",
        "Safety protocols",
      ],
    },
    {
      title: "Logistics Planning",
      description:
        "Strategic logistics planning for efficient material flow management.",
      features: [
        "Route planning",
        "Schedule optimization",
        "Resource allocation",
        "Cost management",
      ],
    },
  ];

  const fleet = [
    {
      name: "Caterpillar 797F",
      type: "Ultra-Class Haul Truck",
      capacity: "400 tons",
      applications: ["Heavy hauling", "Long-distance transport"],
    },
    {
      name: "Komatsu HD785-7",
      type: "Rigid Dump Truck",
      capacity: "91 tons",
      applications: ["Medium hauling", "Site transport"],
    },
    {
      name: "Volvo A60H",
      type: "Articulated Hauler",
      capacity: "60 tons",
      applications: ["Flexible transport", "Rough terrain"],
    },
  ];

  return (
    <div className={styles.loadAndHaul}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Load and Haul</h1>
          <p className={styles.heroDescription}>
            Professional load and haul services for mining operations with
            modern fleet management and logistics expertise.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Load & Haul Services</h2>
          <p className={styles.sectionDescription}>
            Comprehensive transportation solutions for efficient material
            handling and logistics management.
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

      {/* Fleet Section */}
      <div className={styles.fleetSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Fleet</h2>
          <p className={styles.sectionDescription}>
            Modern, well-maintained vehicles for reliable transportation
            services.
          </p>

          <div className={styles.fleetGrid}>
            {fleet.map((vehicle, index) => (
              <div key={index} className={styles.vehicleCard}>
                <h3 className={styles.vehicleName}>{vehicle.name}</h3>
                <div className={styles.vehicleDetails}>
                  <div className={styles.vehicleDetail}>
                    <span className={styles.detailLabel}>Type:</span>
                    <span className={styles.detailValue}>{vehicle.type}</span>
                  </div>
                  <div className={styles.vehicleDetail}>
                    <span className={styles.detailLabel}>Capacity:</span>
                    <span className={styles.detailValue}>
                      {vehicle.capacity}
                    </span>
                  </div>
                  <div className={styles.vehicleDetail}>
                    <span className={styles.detailLabel}>Applications:</span>
                    <span className={styles.detailValue}>
                      {vehicle.applications.join(", ")}
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
            <h2>Need Reliable Transport Services?</h2>
            <p>
              Contact us today to discuss your load and haul requirements and
              get a customized transportation solution.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Get Quote</button>
              <button className={styles.secondaryBtn}>View Fleet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadAndHaul;
