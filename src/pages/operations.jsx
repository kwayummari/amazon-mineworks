import React, { useState } from "react";
import styles from "../styles/Operations.module.scss";

const Operations = () => {
  const [activeLocation, setActiveLocation] = useState("tanzania");

  const locations = {
    tanzania: {
      name: "Tanzania",
      flag: "🇹🇿",
      capital: "Dar es Salaam",
      established: "2018",
      description:
        "Our primary operations center in East Africa, serving mining projects across Tanzania and neighboring countries.",
      projects: [
        {
          name: "Geita Gold Mine",
          type: "Gold Mining",
          status: "Active",
          duration: "2020 - Present",
          description:
            "Comprehensive drilling and mining services for one of Tanzania's largest gold mines.",
          services: [
            "Exploration Drilling",
            "Grade Control",
            "Blast Hole Drilling",
            "Environmental Monitoring",
          ],
        },
        {
          name: "Bulyanhulu Gold Mine",
          type: "Gold Mining",
          status: "Active",
          duration: "2019 - Present",
          description:
            "Underground mining operations with focus on safety and efficiency.",
          services: [
            "Underground Drilling",
            "Mine Development",
            "Safety Management",
            "Load & Haul",
          ],
        },
        {
          name: "North Mara Gold Mine",
          type: "Gold Mining",
          status: "Completed",
          duration: "2018 - 2022",
          description:
            "Successfully completed exploration and development phase.",
          services: [
            "Exploration Drilling",
            "Resource Assessment",
            "Environmental Studies",
            "Community Development",
          ],
        },
      ],
      statistics: {
        employees: 450,
        projects: 12,
        years: 6,
        safety: "Zero Lost Time Injuries in 2024",
      },
      facilities: [
        "Main Office Complex",
        "Equipment Maintenance Facility",
        "Training Center",
        "Medical Clinic",
        "Employee Housing",
      ],
    },
    namibia: {
      name: "Namibia",
      flag: "🇳🇦",
      capital: "Windhoek",
      established: "2021",
      description:
        "Expanding operations in Southern Africa, focusing on uranium and diamond mining projects.",
      projects: [
        {
          name: "Rössing Uranium Mine",
          type: "Uranium Mining",
          status: "Active",
          duration: "2021 - Present",
          description:
            "Uranium mining operations with advanced environmental controls.",
          services: [
            "Open Pit Mining",
            "Environmental Monitoring",
            "Radiation Safety",
            "Water Management",
          ],
        },
        {
          name: "Namdeb Diamond Operations",
          type: "Diamond Mining",
          status: "Active",
          duration: "2022 - Present",
          description: "Marine and land-based diamond mining operations.",
          services: [
            "Marine Mining",
            "Diamond Recovery",
            "Environmental Protection",
            "Community Relations",
          ],
        },
      ],
      statistics: {
        employees: 180,
        projects: 5,
        years: 3,
        safety: "ISO 45001 Certified",
      },
      facilities: [
        "Regional Office",
        "Equipment Depot",
        "Environmental Lab",
        "Training Facility",
      ],
    },
  };

  const currentLocation = locations[activeLocation];

  return (
    <div className={styles.operationsPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Operations</h1>
          <p className={styles.heroDescription}>
            Strategic operations across Africa, delivering world-class mining
            and drilling services with local expertise and global standards.
          </p>
        </div>
      </div>

      <div className={styles.operationsContainer}>
        {/* Location Selector */}
        <div className={styles.locationSelector}>
          <h2>Select Location</h2>
          <div className={styles.locationTabs}>
            {Object.entries(locations).map(([key, location]) => (
              <button
                key={key}
                className={`${styles.locationTab} ${
                  activeLocation === key ? styles.activeLocationTab : ""
                }`}
                onClick={() => setActiveLocation(key)}
              >
                <span className={styles.flag}>{location.flag}</span>
                <span className={styles.locationName}>{location.name}</span>
                <span className={styles.established}>
                  Est. {location.established}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Location Overview */}
        <div className={styles.locationOverview}>
          <div className={styles.locationHeader}>
            <div className={styles.locationInfo}>
              <h3>
                <span className={styles.flag}>{currentLocation.flag}</span>
                {currentLocation.name} Operations
              </h3>
              <p className={styles.locationDescription}>
                {currentLocation.description}
              </p>
              <div className={styles.locationDetails}>
                <span>
                  <strong>Capital:</strong> {currentLocation.capital}
                </span>
                <span>
                  <strong>Established:</strong> {currentLocation.established}
                </span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className={styles.statisticsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>
                {currentLocation.statistics.employees}
              </div>
              <div className={styles.statLabel}>Employees</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>
                {currentLocation.statistics.projects}
              </div>
              <div className={styles.statLabel}>Active Projects</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>
                {currentLocation.statistics.years}
              </div>
              <div className={styles.statLabel}>Years Operating</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Safety Record</div>
            </div>
          </div>

          {/* Projects Section */}
          <div className={styles.projectsSection}>
            <h4>Current Projects</h4>
            <div className={styles.projectsGrid}>
              {currentLocation.projects.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectHeader}>
                    <h5>{project.name}</h5>
                    <div className={styles.projectMeta}>
                      <span className={styles.projectType}>{project.type}</span>
                      <span
                        className={`${styles.projectStatus} ${
                          styles[project.status.toLowerCase()]
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.projectDuration}>
                    <i className="bi bi-calendar"></i>
                    {project.duration}
                  </div>
                  <div className={styles.projectServices}>
                    <h6>Services Provided:</h6>
                    <div className={styles.servicesList}>
                      {project.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className={styles.serviceTag}>
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities Section */}
          <div className={styles.facilitiesSection}>
            <h4>Facilities & Infrastructure</h4>
            <div className={styles.facilitiesGrid}>
              {currentLocation.facilities.map((facility, index) => (
                <div key={index} className={styles.facilityCard}>
                  <i className="bi bi-building"></i>
                  <span>{facility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Section */}
          <div className={styles.safetySection}>
            <div className={styles.safetyCard}>
              <div className={styles.safetyIcon}>
                <i className="bi bi-shield-check"></i>
              </div>
              <div className={styles.safetyContent}>
                <h5>Safety Excellence</h5>
                <p>{currentLocation.statistics.safety}</p>
                <div className={styles.safetyFeatures}>
                  <span>ISO 45001 Certified</span>
                  <span>Zero Harm Policy</span>
                  <span>Continuous Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Presence Section */}
      <div className={styles.globalSection}>
        <div className={styles.globalContent}>
          <h2>Global Presence</h2>
          <p>
            Expanding our operations across Africa to serve the growing mining
            industry.
          </p>
          <div className={styles.globalStats}>
            <div className={styles.globalStat}>
              <div className={styles.globalNumber}>2</div>
              <div className={styles.globalLabel}>Countries</div>
            </div>
            <div className={styles.globalStat}>
              <div className={styles.globalNumber}>17</div>
              <div className={styles.globalLabel}>Active Projects</div>
            </div>
            <div className={styles.globalStat}>
              <div className={styles.globalNumber}>630</div>
              <div className={styles.globalLabel}>Total Employees</div>
            </div>
            <div className={styles.globalStat}>
              <div className={styles.globalNumber}>100%</div>
              <div className={styles.globalLabel}>Safety Record</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operations;
