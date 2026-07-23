import React from "react";
import { Link } from "react-router-dom";
import styles from "./../styles/ImageComponent.module.scss";

function ImageComponent() {
  return (
    <div className={styles.container}>
      <img
        loading="lazy"
        src="/images/background2.png"
        className={styles.image}
        alt="Mining equipment at an Amazon Mineworks site"
      />
      <div className={styles.overlay} />
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          Partner with a trusted mining &amp; drilling contractor
        </h2>
        <p className={styles.subtitle}>
          Get in touch with our team to discuss your next project.
        </p>
        <Link to="/contact-us" className={styles.button}>
          Contact Us <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default ImageComponent;
