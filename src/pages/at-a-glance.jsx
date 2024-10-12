import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import Documentation from '../components/Documentation';

const AtAGlance = () => (
  <div className={styles.landingPage}>
    <Documentation />
  </div>
);

export default AtAGlance;