import React from "react";
import styles from "./../styles/Partners.module.scss";

const partners = [
  { image: "./images/BARRICK.png", alt: "Barrick" },
  { image: "./images/bhp.png", alt: "BHP" },
  { image: "./images/blackRock.png", alt: "BlackRock" },
  { image: "./images/katoro.png", alt: "Katoro Gold" },
  { image: "./images/peak.png", alt: "Peak Resources" },
  { image: "./images/shanta.png", alt: "Shanta Gold" },
  { image: "./images/preseus.png", alt: "Perseus Mining" },
  { image: "./images/armdale.png", alt: "Armadale" },
  { image: "./images/resources.png", alt: "Resources Partner" },
];

const Partners = () => (
  <div className={styles.grid}>
    {partners.map((partner) => (
      <div className={styles.item} key={partner.alt}>
        <img loading="lazy" src={partner.image} alt={partner.alt} className={styles.logo} />
      </div>
    ))}
  </div>
);

export default Partners;
