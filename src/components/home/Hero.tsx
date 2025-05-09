import React from 'react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary-500 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Transform Your Business with Data Analytics & AI
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Unlock valuable insights, optimize operations, and drive innovation with our cutting-edge data analytics and artificial intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button href="/contact" size="lg">
              Get Started
            </Button>
            <Button href="/case-studies" variant="outline" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 md:mt-24">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">98%</div>
            <div className="text-sm md:text-base text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">200+</div>
            <div className="text-sm md:text-base text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">15+</div>
            <div className="text-sm md:text-base text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">40+</div>
            <div className="text-sm md:text-base text-gray-300">Fortune 500 Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;