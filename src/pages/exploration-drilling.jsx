import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import SafetyDocumentation from '../components/SafetyDocumentation';
import SafetyMilestone from '../components/SafetyMilestone';
import SafetyData from '../components/SafetyData';
import SafetyNeck from '../components/SafetyNeck';
import SafetyInitiative from '../components/SafetyInitiative';

const ExplorationDrilling = () => (
  <div className={styles.landingPage}>
    <SafetyDocumentation />
    <SafetyData />
    <SafetyNeck />
  </div>
);

export default ExplorationDrilling;