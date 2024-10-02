import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Service';
import Gallery from './components/Gallery';
import News from './components/News';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import styles from './styles/LandingPage.module.scss';

const LandingPage = () => (
  <div className={styles.landingPage}>
    <Header />
    <About />
    <Services />
    <Gallery />
    <News />
    <FAQ />
    <Footer />
  </div>
);

export default LandingPage;