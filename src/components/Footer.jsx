import React from 'react';
import { Link } from 'react-router-dom';

// Footer Component
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 md:py-16 mt-12 rounded-t-lg shadow-inner">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

        {/* About Us Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold mb-3 border-b-2 border-orange-400 pb-2">ABOUT US</h3>
          <p className="text-sm leading-relaxed text-orange-100">
            KundKund Stationary is a leading art and stationery store in India with a vast distribution channel serving the Art and Design Industry.
          </p>
          <div className="flex items-start text-sm text-orange-100">
            <svg className="w-5 h-5 mr-2 flex-shrink-0 text-orange-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"></path>
            </svg>
            <span>KundKund Stationary<br />T/83, Gali No-7, Gautampuri , New Delhi, PIN - 110053<br /></span>
          </div>
          <div className="flex items-center text-sm text-orange-100">
            <svg className="w-5 h-5 mr-2 flex-shrink-0 text-orange-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.03 21 3 13.97 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1v3.5c0 .35-.09.7-.24 1.02l-2.2 2.2z"></path>
            </svg>
            <span>+91 9650668139,+91 9818818668</span>
          </div>
          <div className="flex items-center text-sm text-orange-100">
            <svg className="w-5 h-5 mr-2 flex-shrink-0 text-orange-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
            </svg>
            <span>Stationerskundkund@gmail.com</span>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xl font-bold mb-3 border-b-2 border-orange-400 pb-2">USEFUL LINKS</h3>
          <Link 
            to="/AboutUs" 
            className="text-sm hover:text-orange-200 transition-colors duration-200"
          >
            About Us
          </Link>
          <Link 
            to="/privacy-policy" 
            className="text-sm hover:text-orange-200 transition-colors duration-200"
            onClick={() => window.scrollTo(0, 0)}
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms-conditions" 
            className="text-sm hover:text-orange-200 transition-colors duration-200"
          >
            Terms & Conditions
          </Link>
          <Link 
            to="/ContactUs" 
            className="text-sm hover:text-orange-200 transition-colors duration-200"
            onClick={() => window.scrollTo(0, 0)}
          >
            Contact Us
          </Link>
        </div>

        {/* Quick Enquiry Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold mb-3 border-b-2 border-orange-400 pb-2">QUICK ENQUIRY</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full p-3 rounded-md bg-gray-800 border border-orange-500 placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm"
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="w-full p-3 rounded-md bg-gray-800 border border-orange-500 placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm"
            />
            <input
              type="tel"
              placeholder="Your Number*"
              className="w-full p-3 rounded-md bg-gray-800 border border-orange-500 placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-md bg-gray-800 border border-orange-500 placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm resize-y"
            ></textarea>
            <div className="flex items-center justify-between">
              {/* Placeholder for reCAPTCHA or similar, as seen in the image */}
              <div className="bg-white p-2 rounded-md text-gray-700 text-xs flex items-center space-x-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                </svg>
                <span>Success!</span>
                <span className="text-gray-400 ml-2">CLOUDFLARE</span>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                SEND
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold mb-3 border-b-2 border-orange-400 pb-2">LOCATION</h3>
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
            {/* Google Maps iframe with KunKun Stationary location */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14015.961383138362!2d77.264223!3d28.678638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzQzLjEiTiA3N8KwMTUnNTEuMiJF!5e0!3m2!1sen!2sin!4v1722960000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KundKund Stationary Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright and Payment Icons */}
      <div className="border-t border-orange-500 mt-10 pt-6 text-center text-sm text-orange-200 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-8">
        <p>&copy; Copyright 2024 KundKund Stationary. All rights reserved.</p>
     
      </div>
    </footer>
  );
}