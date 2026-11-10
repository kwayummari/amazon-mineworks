import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';
import Nav from './components/Nav';
import PageHero from './components/PageHero';
import Footer from './components/Footer';
import CertifiedSeal from './components/CertifiedSeal';
import styles from './styles/LandingPage.module.scss';
import LandingPage from './pages/landing-page';
import Safety from './pages/Safety';
import CompanyProfile from './pages/company-profile';
import VisionValues from './pages/vision-values';
import Team from './pages/management-team';
import ServiceDetail from './pages/ServiceDetail';
import { servicesDetailData } from './data/ServicesDetailData';
import NewsListing from './pages/news-listing';
import NewsArticle from './pages/news-article';
import AdminPanel from './pages/admin-panel';
import Careers from './pages/careers';
import Services from './pages/services';
import Investors from './pages/investors';
import Operations from './pages/operations';
import ContactUs from './pages/contact-us';
// Investors pages
import Announcements from './pages/announcements';
import { formatTitle } from './utils/formatTitle';

const ConditionalPageHero = () => {
  const location = useLocation();

  if (location.pathname === '/') return null;

  const slug = location.pathname.replace(/^\//, '');
  if (servicesDetailData[slug]) return null; // ServiceDetail renders its own hero with a category kicker
  if (location.pathname.startsWith('/news/')) return null; // NewsArticle renders its own hero with the article title

  return <PageHero title={formatTitle(location.pathname)} />;
};

const App = () => (
  <AdminProvider>
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="/*" element={
          <div className={styles.landingPage}>
            <Nav />
            <ConditionalPageHero />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/company-profile" element={<CompanyProfile />} />
              <Route path="/vision-values" element={<VisionValues />} />
              <Route path="/management-team" element={<Team />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/news" element={<NewsListing />} />
              <Route path="/news/:id" element={<NewsArticle />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/services" element={<Services />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/operations" element={<Operations />} />
              <Route path="/contact-us" element={<ContactUs />} />
              {/* Drilling, mining and safety/OHSEQ detail pages — one shared template */}
              {Object.keys(servicesDetailData).map((slug) => (
                <Route key={slug} path={`/${slug}`} element={<ServiceDetail slug={slug} />} />
              ))}
              {/* Investors routes */}
              <Route path="/announcements" element={<Announcements />} />
            </Routes>
            <Footer />
            <CertifiedSeal />
          </div>
        } />
      </Routes>
    </Router>
  </AdminProvider>
);

export default App;
