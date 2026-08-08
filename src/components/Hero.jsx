import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Hero.module.scss";

const slides = [
  {
    id: 1,
    image: "./images/carousel1.jpeg",
    kicker: "Est. 2012 · Tanzania",
    title: "Integrated mining, drilling and construction services.",
    description:
      "Our activities cover the full construction spectrum, divided into three operating divisions — Building Construction, Civil Engineering, and Roads & Earthworks.",
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    id: 2,
    image: "./images/carousel2.jpeg",
    kicker: "Drilling Services",
    title: "Exploration and drilling, done with precision.",
    description:
      "Advanced exploration and drilling services with state-of-the-art equipment and experienced professionals ensuring precision and safety in every project.",
    buttonText: "Exploration Drilling",
    buttonLink: "/exploration-drilling",
  },
  {
    id: 3,
    image: "./images/carousel3.jpeg",
    kicker: "Mining & Construction",
    title: "Operational excellence, from site to summit.",
    description:
      "Comprehensive mining and construction solutions delivering excellence, safety, and environmental responsibility across every operation.",
    buttonText: "Our Operations",
    buttonLink: "/operations",
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} aria-label="Introduction">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === active ? styles.active : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={index !== active}
        />
      ))}
      <div className={styles.scrim} />

      <div className={styles.content}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.pane} ${index === active ? styles.paneActive : ""}`}
            aria-hidden={index !== active}
          >
            <p className={styles.kicker}>{slide.kicker}</p>
            <h1 className={styles.title}>{slide.title}</h1>
            <p className={styles.description}>{slide.description}</p>
            <div className={styles.actions}>
              <Link to={slide.buttonLink} className={styles.primaryAction}>
                <span>{slide.buttonText}</span>
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
              <Link to="/contact-us" className={styles.secondaryAction}>
                Contact Us
              </Link>
            </div>
          </div>
        ))}

        <div className={styles.dots}>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`${styles.dot} ${index === active ? styles.dotActive : ""}`}
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <span className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
        Scroll
      </span>
    </section>
  );
};

export default Hero;
