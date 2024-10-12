import React from 'react';
import About from '../components/About';
import Services from '../components/Service';
import Gallery from '../components/Gallery';
import News from '../components/News';
import FAQ from '../components/FAQ';
import styles from '../styles/LandingPage.module.scss';

const LandingPage = () => (
  <div className={styles.landingPage}>
    <About />
    <Services />
    <Gallery />
    <News />
    <FAQ />
  </div>
);

export default LandingPage;