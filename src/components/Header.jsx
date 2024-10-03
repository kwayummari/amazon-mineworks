import React, { useEffect, useState } from 'react';
import styles from './../styles/Header.module.scss';

const Header = () => {
  const [backgroundImage, setBackgroundImage] = useState('./images/carousel1.jpeg');

  useEffect(() => {
    const images = [
      './images/carousel1.jpeg',
      './images/carousel2.jpeg',
      './images/carousel3.jpeg'
    ];

    let currentIndex = 0;

    const changeImage = () => {
      currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
      setBackgroundImage(images[currentIndex]);
    };

    const interval = setInterval(changeImage, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <header className={styles.carousel} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <nav className={styles.navigation}>
        <img loading="lazy" src="./images/logo/logo.png" alt="Company logo" className={styles.logo} />
        <a href="#about" className={styles.navLink}>About us</a>
        <a href="#investors" className={styles.navLink}>Investors</a>
        <a href="#services" className={styles.navLink}>Services</a>
        <a href="#safety" className={styles.navLink}>Safety</a>
        <a href="#careers" className={styles.navLink}>Careers</a>
        <a href="#news" className={styles.navLink}>News & Media</a>
      </nav>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Complete Services Provider</h1>
        <p className={styles.heroDescription}>
          Our activities cover the full construction spectrum and are divided into three main operating divisions – Building Construction, Civil Engineering and Roads and Earthworks.
        </p>
        <button className={styles.ctaButton}>FIND OUT MORE</button>
      </div>
    </header>
  );
};

export default Header;
