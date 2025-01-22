import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import SafetyNeck from '../components/SafetyNeck';
import ExplorationDrillingDocumentation from '../components/explorationDrillingDocumentation';
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