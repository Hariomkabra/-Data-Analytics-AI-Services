export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  benefits: string[];
  useCases: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: 'retail' | 'healthcare' | 'finance';
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}