import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import Partners from '../components/Partners';
import Vision from '../components/Vision';
import Values from '../components/values';

const VisionValues = () => (
  <div className={styles.landingPage}>
    <Vision />
    <Values />
    <Partners />
  </div>
);

export default VisionValues;