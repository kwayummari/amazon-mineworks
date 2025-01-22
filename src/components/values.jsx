// OurValues.jsx
import React from "react";
import styles from "./../styles/Values.module.scss";
import { ourValuesData } from "../data/OurValuesData";

const OurValues = () => {
  return (
    <section className={styles.ourValues}>
      <div className={styles.container}>
        <h2 className={styles.title}>{ourValuesData.title}</h2>
        <p className={styles.description}>{ourValuesData.description}</p>
        <div className={styles.valuesGrid}>
          {ourValuesData.values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;