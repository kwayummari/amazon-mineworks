import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './styles/LandingPage.module.scss';
import ImageComponent from './components/ImageComponents';
import LandingPage from './pages/landing-page';
import AtAGlance from './pages/at-a-glance';
import SubHeader from './components/SubHeader';
import Safety from './pages/Safety';

const ConditionalHeader = () => {
  const location = useLocation();

  const formatTitle = (path) => {
    if (path === "/") {
      return "";
    }
    return path
      .replace(/\//g, "") 
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const pathTitle = formatTitle(location.pathname);

  return location.pathname === '/' ? <Header /> : <SubHeader title={pathTitle} />;
};

const App = () => (
  <Router>
    <div className={styles.landingPage}>
      <ConditionalHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/at-a-glance" element={<AtAGlance />} />
        <Route path="/safety" element={<Safety />} />
      </Routes>
      <ImageComponent />
      <Footer />
    </div>
  </Router>
);

export default App;
