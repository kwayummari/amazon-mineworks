import React from "react";
import styles from "./../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} footer`}>
      <div className="container">
        <div className="row">
          <div className="col-md-2 mb-4">
            <img
              src="./images/logo/logo1.png"
              alt="Amazon Mineworks"
              className={styles.logo}
            />
            <p className={styles.tagline}>
              We are professionals for building constructions
            </p>
            <div className={styles.socialIcons}>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
          <div className="col-md-2 footer-links">
            <h5 className={styles.listTitle}>ABOUT COMPANY</h5>
            <ul>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Subsidiary Overview</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Organization structure</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Vision and Mission</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Management</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Gallery</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footer-links">
            <h5 className={styles.listTitle}>COMMODITY</h5>
            <ul>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Our Resources</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Specification Details</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Portfolio</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Mining Operations</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Extracted Resources</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footer-links">
            <h5 className={styles.listTitle}>MEDIA</h5>
            <ul>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Our Resources</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Specification Details</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Portfolio</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Mining Operations</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Extracted Resources</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footer-links">
            <h5 className={styles.listTitle}>INVESTORS</h5>
            <ul>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Investors Relations</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Finance Report</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Stock Information</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Event and Presentation</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>News and Updates</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footer-links">
            <h5 className={styles.listTitle}>OTHERS</h5>
            <ul>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Partnership</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Industry Insights</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Legal and Compliance</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Corporate Events</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Terms of service</a>
              </li>
              <li className={styles.list}>
                <a href="#" className={styles.anchor}>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row copyright mt-2">
          <div className={`${styles.copyright} col-md-6`}>
            <p>Copyright Amazon mineworks. All rights Reserved.</p>
          </div>
          <div className={`${styles.designed} col-md-6 text-end bottom-links`}>
            <p>
              Website designed by{" "}
              <strong>
                <a href="https://aurorawavelabs.com/" className={styles.anchor}>Aurorawave labs</a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
