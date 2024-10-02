import React from 'react';
import styles from "./../styles/Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.logoSection}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f64fd7815192d3d70a7e45e3e7a9702552c6583c34f63975430b4e2faf0ba89?apiKey=69c943fd599c485fb32c02233b347491&" alt="Amazon Mineworks logo" className={styles.footerLogo} />
        <p className={styles.footerTagline}>We are professionals for building constructions</p>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/02030b519ce23eb1fb693c1c7869ddaa810a652916fe24ab523243180eb514f6?apiKey=69c943fd599c485fb32c02233b347491&" alt="Social media icons" className={styles.socialIcons} />
    </div>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/513c281fdb4e1bab636f3c05f0b19a529228954ae4f18cecb416340015d57227?apiKey=69c943fd599c485fb32c02233b347491&" alt="Footer decoration" className={styles.footerDecoration} />
    <div className={styles.footerBottom}>
      <p className={styles.copyright}>Copyright Amazon mineworks. All rights Reserved.</p>
      <div className={styles.footerLinks}>
        <p className={styles.designCredit}>
          Website designed by <span className={styles.designerName}>Aurorawave labs</span>
        </p>
        <nav className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}>Terms of service</a>
          <a href="#" className={styles.legalLink}>Privacy Policy</a>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;