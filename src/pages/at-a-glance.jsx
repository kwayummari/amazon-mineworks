import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import Documentation from '../components/Documentation';
import Data from '../components/Data';

const AtAGlance = () => (
  <div className={styles.landingPage}>
    <Documentation />
    <Data />
  </div>
);

export default AtAGlance;