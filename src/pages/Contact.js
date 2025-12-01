import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    setTimeout(() => setSubmitted(false), 5000);
    setIsLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'studytap21@gmail.com',
      description: 'We\'ll respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6304702631',
      description: '24/7 Available ',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Head Office',
      description: 'Hyderabad, Telangana, India',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-semibold text-blue-600 mb-1">
                  {info.value}
                </p>
                <p className="text-gray-600">
                  {info.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                    <p className="text-green-800 font-medium">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Service Question">Service Question</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Support">Support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-200 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Additional Info
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Business Hours</h4>
                    <p className="text-blue-100">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br/>
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Response Time</h4>
                    <p className="text-blue-100">
                      We typically respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Follow Us</h4>
                    <p className="text-blue-100">
                      Connect with us on social media for the latest updates and news.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-8">
              Find quick answers to common questions about our services
            </p>
            <div className="space-y-4">
              {[
                { q: 'What is your typical response time?', a: 'We respond to all inquiries within 24 hours during business days.' },
                { q: 'Do you offer custom solutions?', a: 'Yes, we specialize in creating custom solutions tailored to your unique needs.' },
                { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, bank transfers, and other payment methods.' },
              ].map((faq, index) => (
                <details key={index} className="group border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {faq.q}
                    <span className="text-2xl transition-transform group-open:rotate-180">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

