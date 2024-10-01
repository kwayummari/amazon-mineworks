import React from 'react';
import styles from './../styles/Header.module.scss';

const Header = () => (
  <header className={styles.carousel}>
    <nav className={styles.navigation}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/442c24c96b6e271c2744c77381e6975a3db1c5f6d2e33eaf48eb46457eb1138d?apiKey=69c943fd599c485fb32c02233b347491&" alt="Company logo" className={styles.logo} />
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

export default Header;