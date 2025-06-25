import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.firstName + ' ' + formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      title: 'New Inquiry from Nexotra Website'
    };

    emailjs
      .send(
        'service_e1x53s8', // ✅ Replace with your actual service ID
        'template_h9nk8i5', // ✅ Replace with your actual template ID
        templateParams,
        'y6x3Wp11pz-Wo0FMp' // ✅ Replace with your actual public key
      )
      .then(
        () => {
          setSubmitted(true);
          setTimeout(() => {
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              message: ''
            });
            setSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.error('Email sending failed:', error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Contact Us</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Fill out the form and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
              <h3 className="text-2xl font-semibold mb-2 text-green-800">Message Sent!</h3>
              <p className="text-green-700">
                Thank you for reaching out to Nexotra. We’ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="John"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 1234567890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Needs</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project or requirements"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center transition-all"
              >
                <span>Start the Conversation</span>
                <Send size={18} className="ml-2" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
