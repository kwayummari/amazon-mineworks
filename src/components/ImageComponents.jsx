import React from "react";
import styles from "./../styles/ImageComponent.module.scss";

function ImageComponent() {
  return (
    <div className={styles.container}>
      <img
        loading="lazy"
        src="/images/background2.png"
        className={styles.image}
        alt="Description of the image"
      />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Do you have other questions? <br/>
        Feel free to reach out to us.</h1>
        <button className={styles.button}><p className={styles.buttonText}>Contact Us</p></button>
      </div>
    </div>
  );
}

export default ImageComponent;
