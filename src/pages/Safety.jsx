import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import SafetyDocumentation from '../components/SafetyDocumentation';
import SafetyMilestone from '../components/SafetyMilestone';

const Safety = () => (
  <div className={styles.landingPage}>
    <SafetyDocumentation />
    <SafetyMilestone />
  </div>
);

export default Safety;