import { Service } from '../types';
import { BarChart3, Brain, Database } from 'lucide-react';

export const services: Service[] = [
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    shortDescription: 'Transform your business with data-driven forecasting and decision-making capabilities.',
    fullDescription: 'Our predictive analytics solutions leverage advanced statistical algorithms and machine learning techniques to analyze historical data, identify patterns, and predict future outcomes with high accuracy. We help organizations move from reactive to proactive decision-making.',
    icon: 'BarChart3',
    benefits: [
      'Identify market trends and business opportunities before competitors',
      'Optimize inventory and resource allocation based on demand forecasts',
      'Reduce operational costs through predictive maintenance',
      'Enhance customer experience with personalized recommendations'
    ],
    useCases: [
      'Sales forecasting and demand planning',
      'Customer churn prediction and prevention',
      'Predictive maintenance for manufacturing equipment',
      'Risk assessment and fraud detection in financial services'
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    shortDescription: 'Harness the power of artificial intelligence to automate processes and gain competitive advantage.',
    fullDescription: 'Our AI and machine learning solutions go beyond basic automation to deliver intelligent systems that learn, adapt, and improve over time. We develop custom models tailored to your specific business challenges and integrate them seamlessly into your existing workflows.',
    icon: 'Brain',
    benefits: [
      'Automate complex decision-making processes',
      'Extract actionable insights from unstructured data',
      'Improve accuracy and efficiency of business operations',
      'Create innovative products and services powered by AI'
    ],
    useCases: [
      'Natural language processing for customer service automation',
      'Computer vision for quality control and surveillance',
      'Recommendation systems for e-commerce and content platforms',
      'Anomaly detection for cybersecurity and fraud prevention'
    ]
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    shortDescription: 'Build robust data infrastructure to collect, process, and store your most valuable asset.',
    fullDescription: 'Our data engineering services focus on designing and implementing scalable, secure, and efficient data pipelines and storage solutions. We help organizations overcome data silos, improve data quality, and establish the foundation for advanced analytics and AI initiatives.',
    icon: 'Database',
    benefits: [
      'Consolidate disparate data sources into a unified view',
      'Ensure data quality, consistency, and compliance',
      'Enable real-time data processing for timely insights',
      'Scale your data infrastructure to accommodate growth'
    ],
    useCases: [
      'Data warehouse and lake implementation',
      'ETL/ELT pipeline development',
      'Real-time streaming data processing',
      'Data governance and compliance frameworks'
    ]
  }
];

export const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'BarChart3':
      return BarChart3;
    case 'Brain':
      return Brain;
    case 'Database':
      return Database;
    default:
      return BarChart3;
  }
};