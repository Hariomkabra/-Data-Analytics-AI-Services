import React from 'react';
import Button from '../common/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-dark-900 text-white">
      <div className="container">
        <div className="bg-gradient-to-r from-primary-700 to-secondary-700 rounded-2xl p-12 text-center max-w-5xl mx-auto relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-300 blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
            <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Schedule a consultation with our data experts to discuss how our analytics and AI solutions can drive growth and innovation for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                href="/contact" 
                variant="primary" 
                className="bg-white-200 text-primary-700  hover:bg-white/10"
              >
                Schedule a Consultation
              </Button>
              <Button 
                href="/services" 
                variant="outline" 
                className="border-white  text-primary-900 hover:bg-white/10"
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;