import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Treatments } from './components/pages/Treatments';
import { Results } from './components/pages/Results';
import { FAQs } from './components/pages/FAQs';
import { BookNow } from './components/pages/BookNow';
import { Contact } from './components/pages/Contact';
import { Privacy } from './components/pages/Privacy';
import { Terms } from './components/pages/Terms';
import { CookiePolicy } from './components/pages/CookiePolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/results" element={<Results />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/book" element={<BookNow />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;