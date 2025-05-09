import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { caseStudies } from '../data/caseStudies';

// Type for industry filter
type IndustryFilter = 'all' | 'retail' | 'healthcare' | 'finance';

const CaseStudiesPage: React.FC = () => {
  const [industryFilter, setIndustryFilter] = useState<IndustryFilter>('all');
  
  // Filter case studies based on selected industry
  const filteredCaseStudies = industryFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === industryFilter);
  
  return (
    <>
      {/* Case Studies Hero */}
      <section className="pt-32 pb-16 bg-secondary-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Case Studies</h1>
            <p className="text-lg text-gray-300">
              Explore how our data analytics and AI solutions have helped organizations across industries solve complex challenges and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Filter and List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          {/* Industry Filter */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setIndustryFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                industryFilter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-dark-600 hover:bg-gray-200'
              }`}
            >
              All Industries
            </button>
            <button
              onClick={() => setIndustryFilter('retail')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                industryFilter === 'retail'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-dark-600 hover:bg-gray-200'
              }`}
            >
              Retail
            </button>
            <button
              onClick={() => setIndustryFilter('healthcare')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                industryFilter === 'healthcare'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-dark-600 hover:bg-gray-200'
              }`}
            >
              Healthcare
            </button>
            <button
              onClick={() => setIndustryFilter('finance')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                industryFilter === 'finance'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-dark-600 hover:bg-gray-200'
              }`}
            >
              Finance
            </button>
          </div>
          
          {/* Case Studies Grid */}
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((caseStudy) => (
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
                      className="mt-auto flex items-center text-primary-600 font-medium hover:text-primary-800 group-hover:translate-x-1 transition-all"
                    >
                      Read Case Study <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-dark-600">
                No case studies found for the selected industry.
              </p>
              <button
                onClick={() => setIndustryFilter('all')}
                className="mt-4 text-primary-600 hover:text-primary-800 font-medium"
              >
                View all case studies
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <SectionTitle 
            title="Ready to Achieve Similar Results?" 
            subtitle="Contact us today to discuss how our data analytics and AI solutions can help your organization overcome challenges and drive growth." 
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

export default CaseStudiesPage;