import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./../styles/Header.module.scss";

const Header = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "./images/carousel1.jpeg"
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const images = [
      "./images/carousel1.jpeg",
      "./images/carousel2.jpeg",
      "./images/carousel3.jpeg",
    ];

    let currentIndex = 0;

    const changeImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      setBackgroundImage(images[currentIndex]);
    };

    const interval = setInterval(changeImage, 10000);

    return () => clearInterval(interval);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSubmenuToggle = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <header
      className={styles.carousel}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <nav className={styles.navigation}>
        <Link to="/">
          <img
            loading="lazy"
            src="./images/logo/logo.png"
            alt="Company logo"
            className={styles.logo}
          />
        </Link>
        <div className={styles.links}>
          <div className={styles.menuItem}>
            <a href="#about" className={styles.navLink}>
              About us
            </a>
            <div className={styles.submenu}>
              <Link to="/company-profile">Company Profile</Link>
              <Link to="/vision-values">Vision and Values</Link>
              <Link to="/management-team">Management Team</Link>
            </div>
          </div>
          <div
            className={styles.menuItem}
            onMouseEnter={() => handleSubmenuToggle("investors")}
            onMouseLeave={() => handleSubmenuToggle(null)}
          >
            <a href="#investors" className={styles.navLink}>
              Drilling Services
            </a>
            {activeSubmenu === "investors" && (
              <div className={styles.submenu}>
                <a href="#financial">Exploration Drilling</a>
                <a href="#financial-results">Grade Control Drilling</a>
                <a href="#presentations">Blast Hole Drilling</a>
                <a href="#presentations">Underground Drilling</a>
                <a href="#presentations">Geothermal Drilling</a>
                <a href="#presentations">Water Boreholes Drilling</a>
              </div>
            )}
          </div>
          <div className={styles.menuItem}>
            <a href="#services" className={styles.navLink}>
              Mining Services
            </a>
            <div className={styles.submenu}>
              <a href="#exploration-services">Construction Works</a>
              <a href="#mining-services">Mine Earthworks</a>
              <a href="#mining-services">Load and Haul</a>
              <a href="#mining-services">Building Works</a>
              <a href="#mining-services">Survey Services</a>
            </div>
          </div>
          <div className={styles.menuItem}>
            <a href="#services" className={styles.navLink}>
              Safety/OHSEQ
            </a>
            <div className={styles.submenu}>
              <Link to="/safety">Occupation</Link>
              <a href="#mining-services">Health</a>
              <a href="#mining-services">Safety</a>
              <a href="#mining-services">Environment</a>
              <a href="#mining-services">Quality Management</a>
            </div>
          </div>
          <div className={styles.menuItem}>
            <a href="#services" className={styles.navLink}>
              Operations
            </a>
            <div className={styles.submenu}>
              <Link to="/safety">Tanzania</Link>
              <a href="#mining-services">Namibia</a>
            </div>
          </div>
          <div className={styles.menuItem}>
            <a href="#services" className={styles.navLink}>
              Investors
            </a>
            <div className={styles.submenu}>
              <Link to="/safety">Announcements</Link>
              <a href="#mining-services">Presentations</a>
              <a href="#mining-services">Corporate Governance</a>
              <a href="#mining-services">
                Corporate Social Responsibility (CSR)
              </a>
              <a href="#mining-services">Certifications</a>
            </div>
          </div>
          <div className={styles.menuItem}>
            <a href="#news" className={styles.navLink}>
              Blog
            </a>
          </div>
          <div className={styles.menuItem}>
            <a href="#news" className={styles.navLink}>
              Contact Us
            </a>
          </div>
        </div>

        <button onClick={toggleDrawer} className={styles.menuButton}>
          &#9776;
        </button>

        <div
          className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}
        >
          <div className={styles.menuItem}>
            <a href="#about" className={styles.navLink}>
              About us
            </a>
            <div className={styles.submenu}>
              <a href="#team">Our Team</a>
              <a href="#history">History</a>
            </div>
          </div>
        </div>
      </nav>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Complete Services Provider</h1>
        <p className={styles.heroDescription}>
          Our activities cover the full construction spectrum and are divided
          into three main operating divisions – Building Construction, Civil
          Engineering and Roads and Earthworks.
        </p>
        <button className={styles.ctaButton}>FIND OUT MORE</button>
      </div>
    </header>
  );
};

export default Header;
