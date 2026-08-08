import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PageHero.module.scss";

const PageHero = ({ title, kicker, image = "./images/background.jpeg" }) => (
  <div className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
    <div className={styles.scrim} />
    <div className={styles.content}>
      <p className={styles.breadcrumb}>
        <Link to="/">Home</Link>
        <i className="bi bi-chevron-right" aria-hidden="true"></i>
        <span>{title}</span>
      </p>
      {kicker && <p className={styles.kicker}>{kicker}</p>}
      <h1 className={styles.title}>{title}</h1>
    </div>
  </div>
);

export default PageHero;
