// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';


export default function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen flex flex-col">
        <Header />
        
        {/* Main content area that will change based on route */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}