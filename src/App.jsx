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
import Toys from "./pages/Toys";
import OfficeSupply from "./pages/OfficeSupply";
import SchoolStationary from "./pages/SchoolStationary";
import Decoration from "./pages/Decoration";

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
             <Route path="/toys" element={<Toys />} />
        <Route path="/office-supply" element={<OfficeSupply />} />
        <Route path="/school-stationary" element={<SchoolStationary />} />
        <Route path="/decoration" element={<Decoration />} />
          

          
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}