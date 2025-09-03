import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import FormationsPage from './pages/FormationsPage';
import TrainingDetailsPage from './pages/TrainingDetailsPage';
import AdmissionPage from './pages/AdmissionPage';
import DiplomaPage from './pages/DiplomaPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import BlogPage from './pages/BlogPage';
import EventsPage from './pages/EventsPage';
import FAQPage from './pages/FAQPage';
import ForumPage from './pages/ForumPage';
import AssetsPage from './pages/AssetsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import WhatsAppAssistant from './components/WhatsAppAssistant';  // ✅ import WhatsApp

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/formations" element={<FormationsPage />} />
            <Route path="/formations/:slug" element={<TrainingDetailsPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="/diplomes" element={<DiplomaPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/actualites" element={<NewsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/evenements" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/atouts" element={<AssetsPage />} />
            <Route path="/galerie" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />

        {/* ✅ Bouton WhatsApp affiché sur toutes les pages */}
        <WhatsAppAssistant />
      </div>
    </Router>
  );
}

export default App;
