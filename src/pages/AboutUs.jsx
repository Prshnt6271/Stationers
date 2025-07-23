import React from 'react';

// AboutUs Component
export default function AboutUs() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 font-sans antialiased text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 leading-tight mb-4">
            About Sitaram Stationers
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in quality stationery and art supplies since 1975.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 lg:p-12 mb-10 md:mb-16 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/600x400/ADD8E6/000000?text=Our+Story"
              alt="Our Story at Sitaram Stationers"
              className="w-full h-auto rounded-lg shadow-md object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/333333?text=Image+Error"; }}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-blue-600 mb-4">Our Legacy of Quality</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sitaram Stationers began its journey in 1975 with a simple vision: to provide the finest quality stationery and art supplies to the community. What started as a small shop has grown into a leading name in the industry, serving artists, students, and professionals across India.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For over four decades, we've remained committed to our founding principles of excellence, customer satisfaction, and a passion for creativity. We believe in empowering our customers with the right tools to bring their ideas to life.
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="text-blue-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 12c0 3.072 1.243 5.861 3.295 7.915l3.293-3.293A7 7 0 0112 14a7 7 0 014.707 1.882l3.293 3.293A12.001 12.001 0 0021.08 12c0-3.072-1.243-5.861-3.295-7.915z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the leading provider of high-quality stationery and art materials, inspiring creativity and supporting the artistic and academic endeavors of our customers.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="text-green-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To foster a vibrant community of creators and learners by continually expanding our curated selection of products and providing exceptional service.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-blue-600 mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-purple-500 mb-3">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L18 20l-2.286-6.857L10 12l5.714-2.143L12 4z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Excellence</h4>
              <p className="text-gray-600 text-sm">
                We are committed to sourcing and providing only the highest quality products.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-red-500 mb-3">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h4>
              <p className="text-gray-600 text-sm">
                Our customers are at the heart of everything we do. We strive for exceptional service.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-yellow-500 mb-3">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4.343 19.657l-.707.707M17 12h.01M7 12h.01M12 21v-1M5.636 4.364l-.707-.707M18.364 4.364l.707-.707"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation & Growth</h4>
              <p className="text-gray-600 text-sm">
                We continuously seek new products and ideas to meet evolving needs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}