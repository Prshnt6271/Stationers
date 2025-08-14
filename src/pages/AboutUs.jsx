import React from 'react';
import BrandsSection from '../components/BrandsSection';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Kund Kund Stationers
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your Trusted Partner in Quality Stationery Since 1985
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
        <div className="lg:w-1/2">
          <img 
            src="https://www.kundkundstationers.com/images/about-store.jpg" 
            alt="Kund Kund Stationers Store"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
           Kundkund Stationers is a leading wholesale stationery supplier based in Gautampuri, Delhi, serving the growing demand for quality, affordable stationery across the region. We focus on delivering a wide range of stationery products that meet the needs of schools, offices, retailers, and institutional buyers.

Our store offers a carefully curated selection of products – including notebooks, writing instruments, art supplies, office materials, and branded essentials – all available at competitive wholesale rates. Whether it's popular items like Writeflow notebooks or a variety of essential day-to-day stationery, we ensure stock that reflects both quality and value.

What sets Kundkund Stationers apart is our commitment to bulk supply efficiency, reliable sourcing, and customer satisfaction. By maintaining strong ties with reputed manufacturers and distributors, we consistently provide our clients with updated product lines and favorable margins.

We welcome retailers, resellers, and procurement professionals to visit our store and explore an extensive range of products designed to suit various business needs. As a fast-growing name in Delhi’s wholesale stationery market, we continue to expand our offerings while staying rooted in service, trust, and transparency.
          </p>
          <p className="text-gray-600">
            Our journey began with a simple mission: <span className="font-semibold italic">to make quality stationery accessible to everyone</span>. Today, we serve businesses, educational institutions, and individual customers with a vast selection of products.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-blue-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Legacy of Trust – Over 38 years of experience",
            "Wide Product Range – School to corporate supplies",
            "Quality Assurance – Only the best brands",
            "Customer-Centric Approach – Personalized service",
            "Fast & Reliable Delivery – Across Mumbai"
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          We aim to be the <span className="font-semibold">go-to destination for all stationery needs</span>, combining traditional values with modern convenience. Whether you're a student, a professional, or a business, we provide the tools you need to <span className="font-semibold">write your success story</span>.
        </p>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Visit Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            {icon: "📍", title: "Address", content: "123 Stationery Street, Mumbai"},
            {icon: "📞", title: "Phone", content: "+91 1234567890"},
            {icon: "📧", title: "Email", content: "info@kundkundstationers.com"},
            {icon: "🌐", title: "Website", content: "www.kundkundstationers.com"}
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <BrandsSection></BrandsSection>
    </div>
  );
};

export default AboutUs;