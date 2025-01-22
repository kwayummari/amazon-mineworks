import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import SafetyNeck from '../components/SafetyNeck';
import ExplorationDrillingSafety from '../components/ExplorationDrillingSafety';
import GradeControlDrillingDocumentation from '../components/GradeControlDrillingDocumentation';

const GradeControlDrilling = () => (
  <div className={styles.landingPage}>
    <GradeControlDrillingDocumentation />
    <ExplorationDrillingSafety />
    <SafetyNeck />
  </div>
);

export default GradeControlDrilling;