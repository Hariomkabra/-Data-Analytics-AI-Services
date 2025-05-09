import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import { services, getServiceIcon } from '../data/services';
import { caseStudies } from '../data/caseStudies';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  // Find the service by ID
  const service = services.find(s => s.id === serviceId);
  
  // If service not found, redirect to services page
  if (!service) {
    React.useEffect(() => {
      navigate('/services');
    }, [navigate]);
    return null;
  }
  
  // Find related case studies (in a real app, this would be more sophisticated)
  const relatedCaseStudies = caseStudies.slice(0, 2);
  
  // Get the service icon
  const Icon = getServiceIcon(service.icon);
  
  return (
    <>
      {/* Service Hero */}
      <section className="pt-32 pb-16 bg-primary-900 text-white">
        <div className="container mx-auto">
          <Link 
            to="/services" 
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <div className="flex items-start gap-4">
            <div className="bg-white/10 rounded-full p-3 text-white">
              <Icon size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{service.title}</h1>
              <p className="text-lg text-gray-300 max-w-3xl">
                {service.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionTitle title="How We Help" />
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                  <p className="text-dark-700">
                    Our approach to {service.title.toLowerCase()} combines deep technical expertise with industry knowledge to deliver solutions that address your specific business challenges. We follow a proven methodology:
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Assessment & Strategy</h4>
                        <p className="text-dark-600">We analyze your current state, identify opportunities, and develop a tailored strategy aligned with your business goals.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Solution Design</h4>
                        <p className="text-dark-600">Our experts design a comprehensive solution architecture that leverages the latest technologies and best practices.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Implementation</h4>
                        <p className="text-dark-600">We build and deploy your solution using agile methodologies, ensuring quality and alignment with requirements.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Adoption & Optimization</h4>
                        <p className="text-dark-600">We provide training, change management support, and continuous optimization to maximize business value.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, idx) => (
                      <div 
                        key={idx} 
                        className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                      >
                        <div className="flex items-start">
                          <span className="text-primary-600 mr-2 text-xl">✓</span>
                          <span>{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Common Use Cases</h3>
                <ul className="space-y-3">
                  {service.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-primary-100 text-primary-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">
                        {idx + 1}
                      </div>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-2">Ready to Get Started?</h4>
                  <p className="text-dark-600 text-sm mb-4">
                    Contact us to discuss how our {service.title.toLowerCase()} solutions can help your business.
                  </p>
                  <Button href="/contact" className="w-full">
                    Request a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <SectionTitle 
              title="Related Case Studies"
              subtitle="See how our solutions have helped businesses like yours achieve success."
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedCaseStudies.map((caseStudy) => (
                <div 
                  key={caseStudy.id} 
                  className="card overflow-hidden group h-full flex flex-col"
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent flex items-end">
                      <span className="text-white font-medium px-4 py-2 capitalize">
                        {caseStudy.industry}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
                    <p className="text-dark-600 mb-4 line-clamp-3">{caseStudy.challenge}</p>
                    <Link 
                      to={`/case-studies/${caseStudy.id}`} 
                      className="mt-auto inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-all hover:translate-x-1"
                    >
                      Read Case Study <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/case-studies" variant="outline">
                View All Case Studies
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ServiceDetailPage;