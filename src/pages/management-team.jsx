import React from 'react';
import styles from '../styles/LandingPage.module.scss';
import ManagementTeam from '../components/team';

const Team = () => (
    <div className={styles.landingPage}>
        <ManagementTeam />
  </div>
);

export default Team;