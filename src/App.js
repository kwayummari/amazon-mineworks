import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './styles/LandingPage.module.scss';
import ImageComponent from './components/ImageComponents';
import LandingPage from './pages/landing-page';

const App = () => (
  <div className={styles.landingPage}>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    <ImageComponent />
    <Footer />
  </div>
);

export default App;