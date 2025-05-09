import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { teamMembers } from '../data/team';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* About Hero */}
      <section className="pt-32 pb-16 bg-dark-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
            <p className="text-lg text-gray-300">
              We're a team of data scientists, engineers, and business consultants passionate about helping organizations unlock the power of their data.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Our Mission" />
              <p className="text-lg text-dark-700">
                At DataAI Solutions, our mission is to democratize data and AI technologies, making them accessible and actionable for businesses of all sizes. We believe that data-driven decision making is the key to innovation, efficiency, and competitive advantage in today's digital economy.
              </p>
              <p className="text-lg text-dark-700 mt-4">
                We're committed to delivering solutions that not only solve immediate challenges but also build lasting capabilities within our client organizations, enabling them to thrive in a data-rich future.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Excellence</h4>
                    <p className="text-dark-600">We pursue excellence in everything we do, from technical implementation to client communication.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Innovation</h4>
                    <p className="text-dark-600">We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Partnership</h4>
                    <p className="text-dark-600">We work as partners with our clients, deeply understanding their business to deliver tailored solutions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Integrity</h4>
                    <p className="text-dark-600">We uphold the highest ethical standards in our work, especially regarding data privacy and security.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Story" 
            subtitle="From startup to industry leader in data analytics and AI solutions."
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-4 border-primary-600 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[10px]"></div>
              <div>
                <span className="text-xl font-bold">2010</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">Company Founded</h3>
                <p className="text-dark-600">
                  DataAI Solutions was founded by a group of data scientists and engineers with a vision to help businesses leverage data for strategic advantage.
                </p>
              </div>
            </div>
            
            <div className="relative border-l-4 border-primary-600 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[10px]"></div>
              <div>
                <span className="text-xl font-bold">2013</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">First Enterprise Client</h3>
                <p className="text-dark-600">
                  Secured our first Fortune 500 client and delivered a successful predictive analytics solution that reduced operational costs by 22%.
                </p>
              </div>
            </div>
            
            <div className="relative border-l-4 border-primary-600 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[10px]"></div>
              <div>
                <span className="text-xl font-bold">2016</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">AI Practice Launched</h3>
                <p className="text-dark-600">
                  Expanded our service offering to include machine learning and AI solutions, helping clients automate complex processes and extract insights from unstructured data.
                </p>
              </div>
            </div>
            
            <div className="relative border-l-4 border-primary-600 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[10px]"></div>
              <div>
                <span className="text-xl font-bold">2019</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">Global Expansion</h3>
                <p className="text-dark-600">
                  Opened offices in Europe and Asia to better serve our growing international client base and access global talent pools.
                </p>
              </div>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[10px]"></div>
              <div>
                <span className="text-xl font-bold">Today</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">Industry Leader</h3>
                <p className="text-dark-600">
                  Now recognized as an industry leader in data analytics and AI solutions, we continue to innovate and help organizations across industries transform their operations and create competitive advantage through data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Leadership Team" 
            subtitle="Meet the experts driving innovation and excellence in data analytics and AI."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="card overflow-hidden group">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary-600 mb-3">{member.role}</p>
                  <p className="text-dark-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-dark-900 text-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Why Choose Us" 
            subtitle="What sets us apart in the data analytics and AI landscape."
            centered
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-primary-300">Deep Expertise</h3>
              <p className="text-gray-300">
                Our team includes PhDs, former tech company leaders, and industry specialists with decades of combined experience in data science, engineering, and business strategy.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-primary-300">Business Focus</h3>
              <p className="text-gray-300">
                We're not just technologists. We understand business challenges and design solutions that deliver measurable ROI and competitive advantage.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-primary-300">End-to-End Capabilities</h3>
              <p className="text-gray-300">
                From strategy to implementation to adoption, we provide comprehensive support throughout your data and AI journey.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-primary-300">Proven Results</h3>
              <p className="text-gray-300">
                Our track record includes successful projects for Fortune 500 companies, mid-sized businesses, and innovative startups across diverse industries.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-primary-300">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We continuously invest in R&D to stay at the forefront of data science and AI, bringing the latest innovations to our client solutions.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-primary-300">Collaborative Approach</h3>
              <p className="text-gray-300">
                We work alongside your team, transferring knowledge and building capabilities to ensure long-term success beyond our engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;