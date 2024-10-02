import React from 'react';
import styles from "./../styles/Footer.module.scss";

const Footer = () => {
  return (
    <main className={styles.container}>
      <section className={styles.contentWrapper}>
        <div className={styles.flexContainer}>
          <div className={styles.imageColumn}>
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f64fd7815192d3d70a7e45e3e7a9702552c6583c34f63975430b4e2faf0ba89?apiKey=69c943fd599c485fb32c02233b347491&" 
              alt="Professional construction workers at a building site" 
              className={styles.constructionImage} 
            />
          </div>
          <div className={styles.textColumn}>
            <h1 className={styles.tagline}>
              We are professionals for building constructions
            </h1>
          </div>
        </div>
      </section>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/02030b519ce23eb1fb693c1c7869ddaa810a652916fe24ab523243180eb514f6?apiKey=69c943fd599c485fb32c02233b347491&" 
        alt="Company logo" 
        className={styles.logo} 
      />
    </main>
  );
};

export default Footer;