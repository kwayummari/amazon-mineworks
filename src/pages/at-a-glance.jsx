import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import Documentation from '../components/Documentation';
import Data from '../components/Data';
import Data2 from '../components/Data2';
import CommunitySupport from '../components/CommunitySupport';

const AtAGlance = () => (
  <div className={styles.landingPage}>
    <Documentation />
    <Data />
    <Data2 />
    <CommunitySupport />
  </div>
);

export default AtAGlance;