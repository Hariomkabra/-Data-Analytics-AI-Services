import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Cpu, Network, Workflow, MessageSquare, Code, ArrowUpRight } from 'lucide-react';
import Button from '../../components/common/Button';

const AIMLPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-dark-900 to-primary-800 text-white">
        <div className="container mx-auto">
          <Link 
            to="/services" 
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-500/20 p-3 rounded-xl">
                <Brain className="h-8 w-8 text-primary-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">AI & Machine Learning</h1>
            </div>
            <p className="text-xl text-gray-300">
              Leverage cutting-edge artificial intelligence and machine learning solutions to automate processes, gain insights, and create innovative products.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
              <Brain className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Deep Learning</h3>
              <p className="text-gray-600">Advanced neural networks for complex pattern recognition and decision-making.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
              <MessageSquare className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Natural Language Processing</h3>
              <p className="text-gray-600">Transform unstructured text data into actionable insights and automated interactions.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
              <Cpu className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Computer Vision</h3>
              <p className="text-gray-600">Advanced image and video analysis for automated visual understanding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Intelligent Automation",
                description: "Automate complex processes with AI-powered decision making.",
                icon: Workflow,
                link: "/case-studies"
              },
              {
                title: "Recommendation Systems",
                description: "Personalized suggestions for products, content, and services.",
                icon: Network,
                link: "/case-studies"
              },
              {
                title: "Conversational AI",
                description: "Natural language interfaces and chatbots for customer service.",
                icon: MessageSquare,
                link: "/case-studies"
              }
            ].map((useCase, index) => (
              <Link 
                key={index}
                to={useCase.link}
                className="group p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <useCase.icon className="h-8 w-8 text-primary-600" />
                  <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gradient-to-br from-dark-900 to-primary-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "TensorFlow",
              "PyTorch",
              "Keras",
              "BERT",
              "OpenAI API",
              "Hugging Face",
              "Azure ML",
              "AWS SageMaker"
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors"
              >
                <span className="text-lg font-medium text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Business with AI</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's explore how AI and machine learning can drive innovation and efficiency in your organization.
          </p>
          <Button href="/contact" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </>
  );
};

export default AIMLPage;