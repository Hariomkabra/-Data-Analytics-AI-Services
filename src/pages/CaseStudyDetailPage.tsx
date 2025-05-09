import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Button from '../components/common/Button';
import { caseStudies } from '../data/caseStudies';

const CaseStudyDetailPage: React.FC = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const navigate = useNavigate();
  
  // Find the case study by ID
  const caseStudy = caseStudies.find(cs => cs.id === caseStudyId);
  
  // If case study not found, redirect to case studies page
  if (!caseStudy) {
    React.useEffect(() => {
      navigate('/case-studies');
    }, [navigate]);
    return null;
  }
  
  // Get related case studies (same industry, excluding current)
  const relatedCaseStudies = caseStudies
    .filter(cs => cs.industry === caseStudy.industry && cs.id !== caseStudy.id)
    .slice(0, 2);
  
  return (
    <>
      {/* Case Study Hero */}
      <section className="pt-32 pb-16 bg-primary-900 text-white">
        <div className="container mx-auto">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
          </Link>
          <div className="max-w-3xl">
            <div className="px-3 py-1 bg-primary-700 text-primary-100 rounded-full text-sm inline-block mb-4 capitalize">
              {caseStudy.industry}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{caseStudy.title}</h1>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-dark-700">{caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                  <p className="text-dark-700">{caseStudy.solution}</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Results</h2>
                  <div className="space-y-3 mt-6">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                        <p>{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Ready to achieve similar results?</h3>
                <p className="text-dark-600 mb-6">
                  Our team of experts is ready to help your organization leverage data analytics and AI to overcome challenges and drive growth.
                </p>
                <Button href="/contact" className="w-full">
                  Schedule a Consultation
                </Button>
                
                {relatedCaseStudies.length > 0 && (
                  <div className="mt-8">
                    <h4 className="font-semibold mb-4 text-lg">Related Case Studies</h4>
                    <div className="space-y-4">
                      {relatedCaseStudies.map((related) => (
                        <Link 
                          key={related.id}
                          to={`/case-studies/${related.id}`}
                          className="block p-3 bg-white rounded border border-gray-100 hover:border-primary-300 transition-colors"
                        >
                          <span className="text-sm font-medium text-primary-600 block mb-1 capitalize">
                            {related.industry}
                          </span>
                          <h5 className="font-medium line-clamp-2">{related.title}</h5>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-dark-600 mb-8">
            Contact us today to discuss how our data analytics and AI solutions can help your organization achieve remarkable results.
          </p>
          <Button href="/contact" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetailPage;