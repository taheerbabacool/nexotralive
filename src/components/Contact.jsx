import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Clock, Users, Code2, Send, CheckCircle } from 'lucide-react';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

  const handleSubmit = (e) => {
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
        'service_e1x53s8',
        'template_h9nk8i5',
        templateParams,
        'y6x3Wp11pz-Wo0FMp'
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
          }, 1000);
        },
        (error) => {
          console.error('Email sending failed:', error);
        }
      );
  };

  const services = [
    {
      icon: <Code2 className="text-blue-400" size={24} />,
      title: "Custom Development",
      description: "Tailored solutions built with cutting-edge technologies"
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: "Team Augmentation",
      description: "Skilled developers to strengthen your existing team"
    },
    {
      icon: <Clock className="text-purple-400" size={24} />,
      title: "24/7 Support",
      description: "Round-the-clock maintenance and technical support"
    }
  ];

  return (
    <div id="contact" className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Our team of expert developers is here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-400" size={24} />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">Support@nexotra.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center text-black">
                <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                <h3 className="text-2xl font-semibold mb-2 text-green-800">Message Sent!</h3>
                <p className="text-green-700">
                  Thank you for reaching out to Nexotra. We’ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-black">
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
