import React from 'react';
import { useUser } from '../context/UserContext';

const AboutPage = () => {
  const { username } = useUser();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with personalized greeting */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {username ? `Welcome, ${username}!` : 'About World Explorer'}
          </h1>
          <p className="text-xl text-gray-600">
            Discover the world through data and beautiful visualizations
          </p>
        </div>

        {/* Main content sections */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Mission section */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              World Explorer was created to make global country information accessible to everyone. 
              We aggregate data from reliable sources and present it in an intuitive interface, 
              helping students, travelers, and curious minds learn about our world.
            </p>
          </div>

          {/* Features section */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Comprehensive Country Data</h3>
                  <p className="mt-1 text-gray-600">
                    Detailed information on 250+ countries including demographics, geography, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Verified Sources</h3>
                  <p className="mt-1 text-gray-600">
                    All data comes from trusted sources like the World Bank and UN databases.
                  </p>
                </div>
              </div>

              {username && (
                <>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Personalized History</h3>
                      <p className="mt-1 text-gray-600">
                        Your recently viewed countries are saved for quick access.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-lg">
                      <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Custom Preferences</h3>
                      <p className="mt-1 text-gray-600">
                        Set your preferred units and display options (coming soon).
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Team/CTA section */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About The Team</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              World Explorer is developed by a small team of geography enthusiasts and data visualization experts.
              We're committed to providing free access to global information and continuously improving our platform.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800 mb-2">Have feedback or questions?</h3>
              <p className="text-blue-700 mb-4">
                We'd love to hear from you! Contact us at support@worldexplorer.app
              </p>
              {!username && (
                <button
                  onClick={() => window.location.href = '/register'}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Join our community
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;