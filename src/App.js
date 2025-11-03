import { React, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import PracticePage from './pages/PracticePage';
import ProceduralPage from './pages/ProceduralPage';
import ContactPage from './pages/ContactPage';
import LocationPage from './pages/LocationPage';
import PrivacyPolicy from './pages/privacy-pages/PrivacyPolicy';
import TermsOfService from './pages/privacy-pages/TermsOfService';
import Faq from './pages/footer-pages/Faq';
import Tariff from './components/Tariff';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import RichTextEditor from './components/RichTextEditor';
import DynamicBlogRenderer from './pages/DynamicBlogRenderer';
import ScrollToTop from './components/ScrollToTop';
import BlogPagination from './components/BlogPagination';

export default function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If not a hash link, scroll to top; otherwise scroll to id
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  // Removed token verification logic

  return (
    <>
      <ScrollToTop />
      <HelmetProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<PracticePage />} />
            <Route path="/process" element={<ProceduralPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/tariff" element={<Tariff />} />
            <Route path="/blog" element={<BlogPagination />} />
            <Route path="/alogin" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/admin-blogs" element={<RichTextEditor />} />
            </Route>
            <Route path="/:url/:id" element={<DynamicBlogRenderer />} />
          </Routes>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}
