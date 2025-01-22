import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import SafetyData from '../components/SafetyData';
import SafetyNeck from '../components/SafetyNeck';
import ExplorationDrillingDocumentation from '../components/explorationDrillingDocumentation';

const ExplorationDrilling = () => (
  <div className={styles.landingPage}>
    <ExplorationDrillingDocumentation />
    <SafetyData />
    <SafetyNeck />
  </div>
);

export default ExplorationDrilling;