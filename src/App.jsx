// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import BrandsPage from './pages/BrandsPage';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen flex flex-col">
        <Header />
        
        {/* Main content area that will change based on route */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs />} />
             <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/brands" element={<BrandsPage />} />
                 <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          

          
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}