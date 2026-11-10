import React from "react";
import Eyebrow from "./Eyebrow";
import styles from "../../styles/ui/SectionHeading.module.scss";

const SectionHeading = ({
  eyebrow,
  title,
  lede,
  light = false,
  align = "left",
  size = "default",
  className = "",
}) => (
  <div
    className={[styles.heading, styles[align], styles[size], light ? styles.light : "", className]
      .filter(Boolean)
      .join(" ")}
  >
    {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
    {title && <h2 className={styles.title}>{title}</h2>}
    {lede && <p className={styles.lede}>{lede}</p>}
  </div>
);

export default SectionHeading;
