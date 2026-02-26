import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './styles/LandingPage.module.scss';
import ImageComponent from './components/ImageComponents';
import LandingPage from './pages/landing-page';
import SubHeader from './components/SubHeader';
import Safety from './pages/Safety';
import CompanyProfile from './pages/company-profile';
import VisionValues from './pages/vision-values';
import Team from './pages/management-team';
import ExplorationDrilling from './pages/exploration-drilling';
import GradeControlDrilling from './pages/grade-control-drilling';
import NewsListing from './pages/news-listing';
import NewsArticle from './pages/news-article';
import AdminPanel from './pages/admin-panel';
import Careers from './pages/careers';
import Services from './pages/services';
import Investors from './pages/investors';
import Operations from './pages/operations';
import BlastHoleDrilling from './pages/blast-hole-drilling';
import UndergroundDrilling from './pages/underground-drilling';
import GeothermalDrilling from './pages/geothermal-drilling';
import WaterBoreholeDrilling from './pages/water-borehole-drilling';
import Blog from './pages/blog';
import ContactUs from './pages/contact-us';
// Mining Services pages
import ConstructionWorks from './pages/construction-works';
import MineEarthworks from './pages/mine-earthworks';
import LoadAndHaul from './pages/load-and-haul';
import BuildingWorks from './pages/building-works';
import SurveyServices from './pages/survey-services';
// Safety/OHSEQ pages
import Health from './pages/health';
import Environment from './pages/environment';
import QualityManagement from './pages/quality-management';
// Investors pages
import Announcements from './pages/announcements';

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
  <AdminProvider>
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="/*" element={
          <div className={styles.landingPage}>
            <ConditionalHeader />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/company-profile" element={<CompanyProfile />} />
              <Route path="/vision-values" element={<VisionValues />} />
              <Route path="/management-team" element={<Team />} />
              <Route path="/exploration-drilling" element={<ExplorationDrilling />} />
              <Route path="/grade-control-drilling" element={<GradeControlDrilling />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/news" element={<NewsListing />} />
              <Route path="/news/:id" element={<NewsArticle />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/services" element={<Services />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/operations" element={<Operations />} />
              <Route path="/blast-hole-drilling" element={<BlastHoleDrilling />} />
              <Route path="/underground-drilling" element={<UndergroundDrilling />} />
              <Route path="/geothermal-drilling" element={<GeothermalDrilling />} />
              <Route path="/water-borehole-drilling" element={<WaterBoreholeDrilling />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact-us" element={<ContactUs />} />
              {/* Mining Services routes */}
              <Route path="/construction-works" element={<ConstructionWorks />} />
              <Route path="/mine-earthworks" element={<MineEarthworks />} />
              <Route path="/load-and-haul" element={<LoadAndHaul />} />
              <Route path="/building-works" element={<BuildingWorks />} />
              <Route path="/survey-services" element={<SurveyServices />} />
              {/* Safety/OHSEQ routes */}
              <Route path="/health" element={<Health />} />
              <Route path="/environment" element={<Environment />} />
              <Route path="/quality-management" element={<QualityManagement />} />
              {/* Investors routes */}
              <Route path="/announcements" element={<Announcements />} />
            </Routes>
            <ImageComponent />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  </AdminProvider>
);

export default App;