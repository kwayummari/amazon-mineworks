import React from 'react';
import Header from './Header';
// import About from './About';
// import Services from './Services';
// import Gallery from './Gallery';
// import News from './News';
// import FAQ from './FAQ';
// import Footer from './Footer';
import styles from './LandingPage.module.css';

const LandingPage = () => (
  <div className={styles.landingPage}>
    <Header />
    {/* <About />
    <Services />
    <Gallery />
    <News />
    <FAQ />
    <Footer /> */}
  </div>
);

export default LandingPage;