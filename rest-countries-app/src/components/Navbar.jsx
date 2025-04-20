import React, { useState, useEffect } from 'react';
import LoginBox from '../components/LoginBox';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    // Set initial scroll state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      {/* Auth Modal Blur */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${isAuthModalOpen ? 'backdrop-blur-sm bg-black/20' : 'pointer-events-none'}`} />
      
      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <LoginBox
            onStateChange={(isOpen, type) => {
              setIsAuthModalOpen(isOpen);
              setAuthModalType(type);
            }}
          />
        </div>
      )}

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 shadow-lg 
        ${scrolled ? 'bg-white py-2' : 'bg-white/80 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-2">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className={`text-xl font-bold ${scrolled ? 'text-cyan-600' : 'text-gray-800'} tracking-tight`}>
                  Country Explorer
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${scrolled ? 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  Countries
                </a>
                
                <Link
  to="/about"
  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
    location.pathname === '/about'
      ? 'bg-blue-100 text-blue-700' // Active state
      : scrolled
        ? 'text-gray-700 hover:bg-gray-100'
        : 'text-gray-700 hover:bg-gray-100'
  }`}
>
  About
</Link>
               
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Add padding to the top of your page content to prevent navbar overlap */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;