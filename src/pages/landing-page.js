import React from 'react';
import About from '../components/About';
import Services from '../components/Service';
import Gallery from '../components/Gallery';
import News from '../components/News';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import styles from '../styles/LandingPage.module.scss';
import ImageComponent from '../components/ImageComponents';

const LandingPage = () => (
  <div className={styles.landingPage}>
    <About />
    <Services />
    <Gallery />
    <News />
    <FAQ />
    <ImageComponent />
    <Footer />
  </div>
);

export default LandingPage;