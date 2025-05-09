import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'retail-demand-forecasting',
    title: 'AI-Powered Demand Forecasting for Major Retailer',
    industry: 'retail',
    challenge: 'A Fortune 500 retailer struggled with inventory management, leading to overstocking of slow-moving items and stockouts of popular products. Traditional forecasting methods failed to account for seasonal trends and special events.',
    solution: 'We implemented an advanced time series forecasting system using ensemble machine learning models that incorporated external factors such as weather, local events, and social media trends. The solution integrated with their existing inventory management system.',
    results: [
      '32% reduction in stockouts for high-demand items',
      '24% decrease in excess inventory costs',
      '$14.5M annual savings in supply chain operations',
      'Improved customer satisfaction scores by 18%'
    ],
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'healthcare-patient-readmission',
    title: 'Reducing Patient Readmissions with Predictive Analytics',
    industry: 'healthcare',
    challenge: 'A network of hospitals faced financial penalties due to high 30-day readmission rates. They needed to identify high-risk patients and implement targeted interventions before discharge.',
    solution: 'We developed a machine learning model that analyzed electronic health records, demographic data, and social determinants of health to predict readmission risk. The system integrated with their clinical workflow to flag high-risk patients and recommend personalized care plans.',
    results: [
      '22% reduction in 30-day readmission rates',
      'Estimated $3.2M in avoided Medicare penalties',
      'Improved resource allocation for post-discharge care',
      'Enhanced patient outcomes and satisfaction'
    ],
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'finance-fraud-detection',
    title: 'Real-time Fraud Detection System for Financial Institution',
    industry: 'finance',
    challenge: 'A leading financial services company was experiencing increasing fraud losses despite using rule-based detection systems. They needed a more sophisticated approach that could adapt to evolving fraud patterns.',
    solution: 'We implemented a real-time fraud detection system using deep learning algorithms and graph analytics. The solution analyzed transaction patterns, user behavior, and network connections to identify suspicious activities with minimal false positives.',
    results: [
      '67% improvement in fraud detection rate',
      '42% reduction in false positive alerts',
      'Estimated annual savings of $22M in prevented fraud',
      'Reduced manual review time by 58%'
    ],
    image: 'https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];