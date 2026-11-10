import React from "react";
import styles from "../../styles/ui/StatRow.module.scss";

const StatRow = ({ stats, light = false, className = "" }) => (
  <dl className={`${styles.row} ${light ? styles.light : ""} ${className}`}>
    {stats.map((stat, index) => (
      <div className={styles.stat} key={index}>
        <dt className={styles.value}>{stat.value}</dt>
        <dd className={styles.label}>{stat.label}</dd>
      </div>
    ))}
  </dl>
);

export default StatRow;
