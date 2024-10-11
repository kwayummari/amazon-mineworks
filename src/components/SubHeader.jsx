import React, { useEffect, useState } from "react";
import styles from "./../styles/Header.module.scss";

const SubHeader = () => {
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
        <img
          loading="lazy"
          src="./images/logo/logo.png"
          alt="Company logo"
          className={styles.logo}
        />
        <div className={styles.links}>
          <div className={styles.menuItem}>
            <a href="#about" className={styles.navLink}>
              About us
            </a>
            <div className={styles.submenu}>
              <a href="#at-a-glance">At a Glance</a>
              <a href="#history">Vision and Values</a>
              <a href="#our-brands">Our Projects</a>
              <a href="#board-of-directors">Board of Directors</a>
              <a href="#management-team">Management Team</a>
              <a href="#company-history">Company History</a>
            </div>
          </div>
          <div
            className={styles.menuItem}
            onMouseEnter={() => handleSubmenuToggle("investors")}
            onMouseLeave={() => handleSubmenuToggle(null)}
          >
            <a href="#investors" className={styles.navLink}>
              Investors
            </a>
            {activeSubmenu === "investors" && (
              <div className={styles.submenu}>
                <a href="#financial">Announcement</a>
                <a href="#financial-results">Financial Result</a>
                <a href="#presentations">Presentations</a>
              </div>
            )}
          </div>
          <div className={styles.menuItem}>
            <a href="#services" className={styles.navLink}>
              Services
            </a>
            <div className={styles.submenu}>
              <a href="#exploration-services">Exploration Services</a>
              <a href="#mining-services">Mining Services</a>
            </div>
          </div>
          <div className={styles.menuItem}>
            <a href="#safety" className={styles.navLink}>
              Safety
            </a>
          </div>
          <div className={styles.menuItem}>
            <a href="#careers" className={styles.navLink}>
              Careers
            </a>
          </div>
          <div className={styles.menuItem}>
            <a href="#news" className={styles.navLink}>
              News & Media
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
    </header>
  );
};

export default SubHeader;
