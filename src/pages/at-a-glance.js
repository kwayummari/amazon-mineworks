import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Service';
import Gallery from './components/Gallery';
import News from './components/News';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import styles from './styles/LandingPage.module.scss';
import ImageComponent from './components/ImageComponents';

const AtAGlance = () => (
  <div className={styles.landingPage}>
    <Header />
    <About />
    <Services />
    <Gallery />
    <News />
    <FAQ />
    <ImageComponent />
    <Footer />
  </div>
);

export default AtAGlance;