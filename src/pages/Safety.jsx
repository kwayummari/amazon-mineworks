import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import SafetyDocumentation from '../components/SafetyDocumentation';
import SafetyMilestone from '../components/SafetyMilestone';
import SafetyData from '../components/SafetyData';
import SafetyNeck from '../components/SafetyNeck';

const Safety = () => (
  <div className={styles.landingPage}>
    <SafetyDocumentation />
    <SafetyMilestone />
    <SafetyData />
    <SafetyNeck />
  </div>
);

export default Safety;