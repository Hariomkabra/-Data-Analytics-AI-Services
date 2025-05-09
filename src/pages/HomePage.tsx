import React from 'react';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <CaseStudiesPreview />
      <CTASection />
    </>
  );
};

export default HomePage;