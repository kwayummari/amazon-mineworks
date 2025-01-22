import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import Data3 from '../components/Data3';
import Partners from '../components/Partners';
import Vision from '../components/Vision';

const VisionValues = () => (
  <div className={styles.landingPage}>
    <Vision />
    <Data3 />
    <Partners />
  </div>
);

export default VisionValues;