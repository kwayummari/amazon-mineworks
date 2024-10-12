import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import Documentation from '../components/Documentation';
import Data from '../components/Data';
import Data2 from '../components/Data2';

const AtAGlance = () => (
  <div className={styles.landingPage}>
    <Documentation />
    <Data />
    <Data2 />
  </div>
);

export default AtAGlance;