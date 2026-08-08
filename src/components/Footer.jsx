import React from "react";
import { Link } from "react-router-dom";
import Container from "./ui/Container";
import Button from "./ui/Button";
import IsoBadge from "./ui/IsoBadge";
import styles from "../styles/Footer.module.scss";

const columns = [
  {
    heading: "Company",
    links: [
      { title: "Company Profile", to: "/company-profile" },
      { title: "Vision & Values", to: "/vision-values" },
      { title: "Management Team", to: "/management-team" },
      { title: "Careers", to: "/careers" },
    ],
  },
  {
    heading: "Services",
    links: [
      { title: "Services Overview", to: "/services" },
      { title: "Operations", to: "/operations" },
      { title: "Safety & OHSEQ", to: "/safety" },
    ],
  },
  {
    heading: "Investors",
    links: [
      { title: "Investor Relations", to: "/investors" },
      { title: "Announcements", to: "/announcements" },
      { title: "News & Insights", to: "/news" },
    ],
  },
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.ctaBand}>
      <Container className={styles.ctaInner}>
        <p className={styles.ctaText}>
          Partner with a trusted mining &amp; drilling contractor.
        </p>
        <Button to="/contact-us" variant="primary">
          Contact Us
        </Button>
      </Container>
    </div>

    <Container className={styles.grid}>
      <div className={styles.brandCol}>
        <Link to="/">
          <img src="./images/logo/logo1.png" alt="Amazon Mineworks" className={styles.logo} />
        </Link>
        <p className={styles.tagline}>
          A fully integrated mining, drilling and construction services provider
          operating across Tanzania since 2012.
        </p>
        <div className={styles.socials}>
          <button type="button" aria-label="Facebook"><i className="bi bi-facebook" aria-hidden="true"></i></button>
          <button type="button" aria-label="LinkedIn"><i className="bi bi-linkedin" aria-hidden="true"></i></button>
          <button type="button" aria-label="Instagram"><i className="bi bi-instagram" aria-hidden="true"></i></button>
          <button type="button" aria-label="Twitter"><i className="bi bi-twitter" aria-hidden="true"></i></button>
        </div>
        <IsoBadge light className={styles.isoBadge} />
      </div>

      {columns.map((column) => (
        <div className={styles.linkCol} key={column.heading}>
          <p className={styles.colHeading}>{column.heading}</p>
          <ul>
            {column.links.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className={styles.linkCol}>
        <p className={styles.colHeading}>Get in Touch</p>
        <ul className={styles.contactList}>
          <li>
            <i className="bi bi-telephone-fill" aria-hidden="true"></i>
            <a href="tel:+255000000000">+255 000 000 000</a>
          </li>
          <li>
            <i className="bi bi-envelope-fill" aria-hidden="true"></i>
            <a href="mailto:info@amazonmineworks.co.tz">info@amazonmineworks.co.tz</a>
          </li>
          <li>
            <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
            <span>Dar es Salaam, Tanzania</span>
          </li>
        </ul>
      </div>
    </Container>

    <div className={styles.legalBar}>
      <Container className={styles.legalInner}>
        <p>&copy; {new Date().getFullYear()} Amazon Mineworks. All rights reserved.</p>
        <p>
          Website by{" "}
          <a href="https://aurorawavelabs.com/" target="_blank" rel="noreferrer noopener">
            Aurorawave Labs
          </a>
        </p>
      </Container>
    </div>
  </footer>
);

export default Footer;
