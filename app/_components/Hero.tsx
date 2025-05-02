import React from 'react';
import JobSearchInput from './JobSearchInput';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white py-20 md:py-28 relative overflow-hidden dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -ml-24 -mt-24 dark:bg-gray-700"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full -mr-24 -mb-24 dark:bg-gray-700"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center">
          <h1 className="max-w-3xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
            Find Your Dream Job
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90 mb-8 animate-slide-up">
            Discover thousands of job opportunities with the perfect companies. Your career journey starts here.
          </p>

          {/* Search Component */}
          <JobSearchInput />

          {/* Stats */}
          <div className="mt-12 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="bg-white/10 backdrop-blur rounded-lg py-4 px-2 dark:bg-gray-700/40">
              <p className="text-3xl font-bold text-white">10,000+</p>
              <p className="text-white/90 text-sm">Active Job Listings</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg py-4 px-2 dark:bg-gray-700/40">
              <p className="text-3xl font-bold text-white">1,000+</p>
              <p className="text-white/90 text-sm">Companies Hiring</p>
            </div>
            <div className="hidden md:block bg-white/10 backdrop-blur rounded-lg py-4 px-2 dark:bg-gray-700/40">
              <p className="text-3xl font-bold text-white">5M+</p>
              <p className="text-white/90 text-sm">Happy Job Seekers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
