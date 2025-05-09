import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { caseStudies } from '../../data/caseStudies';

const CaseStudiesPreview: React.FC = () => {
  // Only show the first 3 case studies
  const previewCaseStudies = caseStudies.slice(0, 3);

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionTitle 
          title="Case Studies" 
          subtitle="See how our data analytics and AI solutions have helped organizations across industries achieve remarkable results."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewCaseStudies.map((caseStudy) => (
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
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{caseStudy.title}</h3>
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
        
        <div className="text-center mt-12">
          <Button href="/case-studies">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;