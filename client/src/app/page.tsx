import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header / Navbar */}
      <header className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              {/* Logo Placeholder */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-700 font-bold text-xl shadow-inner">
                PT
              </div>
              <h1 className="text-2xl font-extrabold tracking-tight">Pandey Traders</h1>
            </div>
            <nav className="hidden md:flex space-x-8 font-medium">
              <a href="#" className="hover:text-green-200 transition-colors">Home</a>
              <a href="#products" className="hover:text-green-200 transition-colors">Products</a>
              <a href="#about" className="hover:text-green-200 transition-colors">About Us</a>
              <a href="#contact" className="hover:text-green-200 transition-colors">Contact</a>
            </nav>
            <div className="md:hidden">
              <button className="text-white hover:text-green-200 focus:outline-none">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Sukhdev Pandey</span>{' '}
                    <span className="block text-green-600 xl:inline">Khad Beej Bhandar</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Premium quality agricultural supplies, fertilizers, and seeds to ensure your farm yields the highest possible return. Trusted by farmers across the region.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a href="#products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg transition-transform hover:scale-105">
                        View Products
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg transition-transform hover:scale-105">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="h-56 w-full bg-green-100 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center relative overflow-hidden">
               {/* Decorative background element simulating a field */}
               <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-700 opacity-90"></div>
               <div className="relative z-10 text-center text-white p-8">
                  <span className="text-6xl">🌱</span>
                  <h2 className="text-3xl font-bold mt-4">Grow With Us</h2>
               </div>
            </div>
          </div>
        </div>

        {/* Features / Highlights */}
        <div id="about" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A Better Way to Farm
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md hover:shadow-xl transition-shadow">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg text-white">
                          🌾
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Premium Seeds</h3>
                      <p className="mt-5 text-base text-gray-500">
                        We provide certified and high-yielding seed varieties tailored for our local soil and climate.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md hover:shadow-xl transition-shadow">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg text-white">
                          🧪
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Fertilizers & Pesticides</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Authentic fertilizers to protect your crops and enhance soil nutrients safely.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md hover:shadow-xl transition-shadow">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg text-white">
                          🤝
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Expert Advice</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Decades of agricultural experience to guide you through every season and challenge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pandey Traders</h3>
              <p className="text-gray-400">Sukhdev Pandey Khad Beej Bhandar</p>
              <p className="text-gray-400 mt-2">Serving farmers with pride and authenticity.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="text-gray-400 space-y-2">
                <li>📍 Gonda, Uttar Pradesh</li>
                <li>📞 +91 XXXXXXXXXX</li>
                <li>✉️ info@pandeytraders.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">Admin Login</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-base text-gray-400">
              &copy; 2026 Pandey Traders. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
