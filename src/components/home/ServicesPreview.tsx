import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import { services, getServiceIcon } from '../../data/services';

const ServicesPreview: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle 
          title="Our Services" 
          subtitle="We provide end-to-end solutions to help organizations harness the power of data and AI."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = getServiceIcon(service.icon);
            
            return (
              <div 
                key={service.id} 
                className="card p-6 flex flex-col h-full border border-gray-100 group"
              >
                <div className="rounded-full bg-primary-50 p-3 w-fit mb-4 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-dark-600 mb-4 flex-grow">{service.shortDescription}</p>
                <Link 
                  to={`/services/${service.id}`} 
                  className="flex items-center text-primary-600 font-medium hover:text-primary-800 group-hover:translate-x-1 transition-all"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;