import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ModernCarousel.module.scss";

const ModernCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slides = [
    {
      id: 1,
      image: "./images/carousel1.jpeg",
      title: "Complete Services Provider",
      description:
        "Our activities cover the full construction spectrum and are divided into three main operating divisions – Building Construction, Civil Engineering and Roads and Earthworks.",
      buttonText: "FIND OUT MORE",
      buttonLink: "/services",
    },
    {
      id: 2,
      image: "./images/carousel2.jpeg",
      title: "Exploration & Drilling Excellence",
      description:
        "Advanced exploration and drilling services with state-of-the-art equipment and experienced professionals ensuring precision and safety in every project.",
      buttonText: "LEARN MORE",
      buttonLink: "/exploration-drilling",
    },
    {
      id: 3,
      image: "./images/carousel3.jpeg",
      title: "Mining & Construction Solutions",
      description:
        "Comprehensive mining and construction solutions delivering excellence, safety, and environmental responsibility across all operations.",
      buttonText: "DISCOVER MORE",
      buttonLink: "/operations",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Touch handlers for mobile
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

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Navigation Header */}
      <nav className={styles.navigation}>
        <Link to="/" className={styles.logo}>
          <img
            loading="lazy"
            src="./images/logo/logo.png"
            alt="Amazon Mineworks Logo"
            className={styles.logoImage}
          />
        </Link>

        <div className={styles.navLinks}>
          <Link to="/company-profile" className={styles.navLink}>
            About
          </Link>
          <Link to="/services" className={styles.navLink}>
            Services
          </Link>
          <Link to="/operations" className={styles.navLink}>
            Operations
          </Link>
          <Link to="/careers" className={styles.navLink}>
            Careers
          </Link>
          <Link to="/contact-us" className={styles.navLink}>
            Contact
          </Link>
        </div>

        <button className={styles.menuButton}>
          <i className="bi bi-list"></i>
        </button>
      </nav>

      {/* Carousel Slides */}
      <div
        className={styles.carousel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.slideContent}>
              <div className={styles.contentWrapper}>
                <h1 className={styles.slideTitle}>{slide.title}</h1>
                <p className={styles.slideDescription}>{slide.description}</p>
                <Link to={slide.buttonLink} className={styles.slideButton}>
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={goToNext}
          aria-label="Next slide"
        >
          <i className="bi bi-chevron-right"></i>
        </button>

        {/* Dots Indicator */}
        <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.activeDot : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernCarousel;
