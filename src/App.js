import React from 'react';
import Header from './components/Header';
import About from './components/About';
// import Services from './Services';
// import Gallery from './Gallery';
// import News from './News';
// import FAQ from './FAQ';
// import Footer from './Footer';
import styles from './styles/LandingPage.module.scss';

const LandingPage = () => (
  <div className={styles.landingPage}>
    <Header />
    <About />
    {/* <Services /> */}
    {/* <Gallery /> */}
    {/* <News /> */}
    {/* <FAQ /> */}
    {/* <Footer /> */}
  </div>
);

export default LandingPage;