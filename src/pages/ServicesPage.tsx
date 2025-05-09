import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { services, getServiceIcon } from '../data/services';

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Services Hero */}
      <section className="pt-32 pb-16 bg-primary-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-lg text-gray-300">
              We offer comprehensive data analytics and AI solutions designed to help businesses extract maximum value from their data assets. Our expert team delivers end-to-end services from strategy to implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => {
              const Icon = getServiceIcon(service.icon);
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={service.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="rounded-full bg-primary-50 p-4 w-fit mb-6 text-primary-600">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-dark-600 mb-6">{service.fullDescription}</p>
                    
                    <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
                    <ul className="mb-6 space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={`/services/${service.id}`} 
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-all hover:translate-x-1"
                    >
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} bg-gray-50 rounded-2xl p-8 h-full`}>
                    <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
                    <ul className="space-y-4">
                      {service.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="bg-primary-100 text-primary-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="font-medium">{useCase}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <SectionTitle 
            title="Ready to Get Started?" 
            subtitle="Contact us today to discuss your data and AI needs. Our experts are ready to help you drive innovation and growth." 
            centered 
          />
          <Link 
            to="/contact" 
            className="btn btn-primary"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;