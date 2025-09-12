import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./../styles/Header.module.scss";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const images = [
    "./images/carousel1.jpeg",
    "./images/carousel2.jpeg",
    "./images/carousel3.jpeg",
  ];

  const carouselContent = [
    {
      title: "Complete Services Provider",
      description:
        "Our activities cover the full construction spectrum and are divided into three main operating divisions – Building Construction, Civil Engineering and Roads and Earthworks.",
    },
    {
      title: "Exploration & Drilling Excellence",
      description:
        "Advanced exploration and drilling services with state-of-the-art equipment and experienced professionals ensuring precision and safety in every project.",
    },
    {
      title: "Mining & Construction Solutions",
      description:
        "Comprehensive mining and construction solutions delivering excellence, safety, and environmental responsibility across all operations.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

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

  // Touch handlers for mobile carousel
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
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
    // {
    //   title: "Operations",
    //   link: "/operations",
    //   submenu: [
    //     { title: "Tanzania", href: "#tanzania" },
    //     { title: "Namibia", href: "#namibia" },
    //   ],
    // },
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
    {
      title: "Blog",
      link: "/blog",
    },
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
    <header
      className={styles.carousel}
      style={{ backgroundImage: `url(${images[currentSlide]})` }}
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

        {/* Desktop Navigation */}
        <div className={styles.links}>
          {menuItems.map((item, index) => renderMenuItem(item, index))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleDrawer} className={styles.menuButton}>
          &#9776;
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

      {/* Carousel Navigation Arrows */}
      <button
        className={`${styles.carouselNav} ${styles.prevButton}`}
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <button
        className={`${styles.carouselNav} ${styles.nextButton}`}
        onClick={goToNext}
        aria-label="Next slide"
      >
        <i className="bi bi-chevron-right"></i>
      </button>

      {/* Carousel Dots Indicator */}
      <div className={styles.carouselDots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              currentSlide === index ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {carouselContent[currentSlide].title}
        </h1>
        <p className={styles.heroDescription}>
          {carouselContent[currentSlide].description}
        </p>
        <button className={styles.ctaButton}>FIND OUT MORE</button>
      </div>
    </header>
  );
};

export default Header;
