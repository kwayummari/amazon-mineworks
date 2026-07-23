import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModernCarousel from "./ModernCarousel";
import styles from "./../styles/HeaderNav.module.scss";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  // Handle body scroll lock when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [drawerOpen]);

  // Handle click outside to close drawer
  const handleDrawerClick = (e) => {
    if (e.target.classList.contains(styles.drawerOpen)) {
      closeDrawer();
    }
  };

  const handleSubmenuToggle = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const menuItems = [
    {
      title: "About us",
      href: "#about",
      submenu: [
        { title: "Company Profile", link: "/company-profile" },
        { title: "Vision and Values", link: "/vision-values" },
        { title: "Management Team", link: "/management-team" },
      ],
    },
    {
      title: "Services",
      link: "/services",
      submenu: [
        // Drilling Services
        { title: "Exploration Drilling", link: "/exploration-drilling" },
        { title: "Grade Control Drilling", link: "/grade-control-drilling" },
        { title: "Blast Hole Drilling", link: "/blast-hole-drilling" },
        { title: "Underground Drilling", link: "/underground-drilling" },
        { title: "Geothermal Drilling", link: "/geothermal-drilling" },
        { title: "Water Boreholes Drilling", link: "/water-borehole-drilling" },
        // Mining Services
        { title: "Construction Works", link: "/construction-works" },
        { title: "Mine Earthworks", link: "/mine-earthworks" },
        { title: "Load and Haul", link: "/load-and-haul" },
        { title: "Building Works", link: "/building-works" },
        { title: "Survey Services", link: "/survey-services" },
      ],
    },
    {
      title: "Safety/OHSEQ",
      href: "#safety",
      submenu: [
        { title: "Occupation", link: "/safety" },
        { title: "Health", link: "/health" },
        { title: "Safety", link: "/safety" },
        { title: "Environment", link: "/environment" },
        { title: "Quality Management", link: "/quality-management" },
      ],
    },
    {
      title: "Operations",
      link: "/operations",
      submenu: [
        { title: "Tanzania", href: "#tanzania" },
        { title: "Namibia", href: "#namibia" },
      ],
    },
    {
      title: "Investors",
      link: "/investors",
      submenu: [
        { title: "Announcements", link: "/announcements" },
        { title: "Presentations", href: "#presentations" },
        { title: "Corporate Governance", href: "#governance" },
        { title: "Corporate Social Responsibility (CSR)", href: "#csr" },
        { title: "Certifications", href: "#certifications" },
      ],
    },
    // {
    //   title: "Blog",
    //   link: "/blog",
    // },
    {
      title: "Opportunities",
      link: "/careers",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
  ];

  const renderMenuItem = (item, index) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isActive =
      activeSubmenu === item.title.toLowerCase().replace(/\s+/g, "-");

    return (
      <div
        key={index}
        className={styles.menuItem}
        onMouseEnter={() =>
          hasSubmenu &&
          handleSubmenuToggle(item.title.toLowerCase().replace(/\s+/g, "-"))
        }
        onMouseLeave={() => hasSubmenu && handleSubmenuToggle(null)}
      >
        {item.link ? (
          <Link to={item.link} className={styles.navLink}>
            {item.title}
          </Link>
        ) : (
          <a href={item.href} className={styles.navLink}>
            {item.title}
          </a>
        )}

        {hasSubmenu && isActive && (
          <div className={styles.submenu}>
            {item.submenu.map((subItem, subIndex) => (
              <div key={subIndex}>
                {subItem.link ? (
                  <Link to={subItem.link}>{subItem.title}</Link>
                ) : (
                  <a href={subItem.href}>{subItem.title}</a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
      >
        <div className={styles.utilityBar}>
          <div className={styles.utilityLeft}>
            <a href="tel:+255000000000" className={styles.utilityItem}>
              <i className="bi bi-telephone-fill"></i> +255 000 000 000
            </a>
            <a href="mailto:info@amazonmineworks.co.tz" className={styles.utilityItem}>
              <i className="bi bi-envelope-fill"></i> info@amazonmineworks.co.tz
            </a>
            <span className={styles.utilityItem}>
              <i className="bi bi-geo-alt-fill"></i> Tanzania &amp; Namibia
            </span>
          </div>
          <div className={styles.utilityRight}>
            <div className={styles.utilitySocials}>
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
            </div>
            <Link to="/contact-us" className={styles.utilityCta}>
              Request a Quote
            </Link>
          </div>
        </div>
        <nav className={styles.navigation}>
          <Link to="/" className={styles.logo}>
            <img
              loading="lazy"
              src="./images/logo/logo1.png"
              alt="Amazon Mineworks logo"
              className={styles.logoImage}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.links}>
            {menuItems.map((item, index) => renderMenuItem(item, index))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleDrawer}
            className={styles.menuButton}
            aria-label="Open menu"
          >
            <i className="bi bi-list"></i>
          </button>

          {/* Mobile Drawer */}
          {drawerOpen && (
            <div
              className={`${styles.drawer} ${styles.drawerOpen}`}
              onClick={handleDrawerClick}
            >
              <div className={styles.drawerHeader}>
                <h3>Menu</h3>
                <button onClick={closeDrawer} className={styles.closeButton}>
                  ×
                </button>
              </div>
              <div className={styles.drawerContent}>
                {menuItems.map((item, index) => (
                  <div key={index} className={styles.drawerMenuItem}>
                    {item.link ? (
                      <Link
                        to={item.link}
                        className={styles.drawerNavLink}
                        onClick={closeDrawer}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className={styles.drawerNavLink}
                        onClick={closeDrawer}
                      >
                        {item.title}
                      </a>
                    )}
                    {item.submenu && item.submenu.length > 0 && (
                      <div className={styles.drawerSubmenu}>
                        {item.submenu.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            className={styles.drawerSubmenuItem}
                          >
                            {subItem.link ? (
                              <Link to={subItem.link} onClick={closeDrawer}>
                                {subItem.title}
                              </Link>
                            ) : (
                              <a href={subItem.href} onClick={closeDrawer}>
                                {subItem.title}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
      <ModernCarousel />
    </>
  );
};

export default Header;
