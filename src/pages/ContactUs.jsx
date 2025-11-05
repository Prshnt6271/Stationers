import React from 'react';
import HeroSection from "../components/HeroSection";

export default function ContactUs() {
  return (
    <section className="min-h-screen bg-white py-12 px-4 md:px-8 overflow-x-hidden">
      <HeroSection></HeroSection>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left: Contact Form */}
        <div className='mt-7'>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b border-gray-300 pb-2">
            SEND US AN EMAIL
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-gray-700 text-sm font-medium">Your Name*</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 text-sm font-medium">Your Email*</label>
                <input
                  type="email"
                  className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div>
                <label className="block mb-1 text-gray-700 text-sm font-medium">Phone Number*</label>
                <input
                  type="tel"
                  className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 text-sm font-medium">Company</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Company"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-gray-700 text-sm font-medium">Your Message</label>
              <textarea
                rows="5"
                className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-y"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right: Contact Info + Map */}
        <div className='mt-7'>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b border-gray-300 pb-2">
            CONTACT US
          </h2>

          <div className="space-y-6 text-gray-700 text-sm">
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.03 21 3 13.97 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1v3.5c0 .35-.09.7-.24 1.02l-2.2 2.2z"></path>
              </svg>
              <p>+91 9650668139<br />+91 9818818668</p>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"></path>
              </svg>
              <p>
                KundKund Stationary<br />
                M7H7+FM4, Delhi<br />
                28°40'43.1"N 77°15'51.2"E
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <p>Stationerskundkund@gmail.com</p>
            </div>
          </div>

          {/* Google Map Section - Updated with KunKun Stationary location */}
          <div className="mt-8 w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14015.961383138362!2d77.264223!3d28.678638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzQzLjEiTiA3N8KwMTUnNTEuMiJF!5e0!3m2!1sen!2sin!4v1722960000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KunKun Stationary Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}