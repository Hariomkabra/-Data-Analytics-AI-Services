import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <>
      {/* Contact Hero */}
      <section className="pt-32 pb-16 bg-primary-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-lg text-gray-300">
              Reach out to discuss how our data analytics and AI solutions can help your organization unlock the full potential of your data.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <SectionTitle title="Get in Touch" />
              <p className="text-dark-600 mb-8">
                Have questions about our services or want to discuss a specific challenge? Contact us using the form or reach out directly through the information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-dark-600">123 Innovation Drive, Tech Park, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-dark-600">info@dataaisolutions.com</p>
                    <p className="text-dark-600">sales@dataaisolutions.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-dark-600">Main: (555) 123-4567</p>
                    <p className="text-dark-600">Support: (555) 987-6543</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Office Hours</h3>
                <div className="space-y-2 text-dark-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold">Thank you for contacting us!</h3>
                    <p>We've received your message and will get back to you within 24-48 hours.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-dark-700 font-medium mb-2">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-dark-700 font-medium mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-dark-700 font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-dark-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-dark-700 font-medium mb-2">
                      Service of Interest*
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a service</option>
                      <option value="predictive-analytics">Predictive Analytics</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="data-engineering">Data Engineering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-dark-700 font-medium mb-2">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button type="submit" className="w-full sm:w-auto">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Visit Our Office" 
            subtitle="We're conveniently located in the heart of the technology district."
            centered
          />
          
          <div className="mt-8 rounded-lg overflow-hidden shadow-md aspect-w-16 aspect-h-9 h-[400px]">
            {/* For a real implementation, this would be a Google Maps or similar embed */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-dark-600 text-lg">
                Interactive map would be embedded here in a production environment
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Calendly Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <SectionTitle 
            title="Schedule a Consultation" 
            subtitle="Book a time with our team to discuss your data analytics and AI needs."
            centered
          />
          
          <div className="mt-8 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <p className="text-dark-600 mb-6">
              Select a convenient time from our calendar for a 30-minute consultation. We'll discuss your challenges, goals, and how our solutions can help your business.
            </p>
            <Button className="w-full sm:w-auto">
              Open Scheduling Calendar
            </Button>
            <p className="text-sm text-dark-500 mt-4">
              In a production environment, this would integrate with a calendar service like Calendly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;