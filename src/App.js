import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './styles/LandingPage.module.scss';
import ImageComponent from './components/ImageComponents';
import LandingPage from './pages/landing-page';
import AtAGlance from './pages/at-a-glance';
import SubHeader from './components/SubHeader';

const ConditionalHeader = () => {
  const location = useLocation();
  return location.pathname === '/' ? <Header /> : <SubHeader />;
};

const App = () => (
  <Router>
    <div className={styles.landingPage}>
      <ConditionalHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/at-a-glance" element={<AtAGlance />} />
      </Routes>
      <ImageComponent />
      <Footer />
    </div>
  </Router>
);

export default App;
