import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import SafetyNeck from '../components/SafetyNeck';
import GradeControlDrillingSafety from '../components/GradeControlDrillingSafety';
import GradeControlDrillingDocumentation from '../components/GradeControlDrillingDocumentation';

const GradeControlDrilling = () => (
  <div className={styles.landingPage}>
    <GradeControlDrillingDocumentation />
    <GradeControlDrillingSafety />
    <SafetyNeck />
  </div>
);

export default GradeControlDrilling;