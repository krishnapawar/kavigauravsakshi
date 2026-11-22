import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { poetData } from '../data/poetData';
import { isValidEmail, isValidPhone, isValidName, isValidMessage } from '../utils/validators';

export const ContactPage = ({ lang }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return lang === 'hi' ? 'नाम दर्ज करना अनिवार्य है' : 'Your name is required';
        if (!isValidName(value)) return lang === 'hi' ? 'कृपया कम से कम 3 अक्षरों का वैध नाम दर्ज करें' : 'Please enter a valid name (at least 3 characters)';
        return '';
      case 'email':
        if (!value.trim()) return lang === 'hi' ? 'ईमेल पता अनिवार्य है' : 'Email address is required';
        if (!isValidEmail(value)) return lang === 'hi' ? 'कृपया एक वैध ईमेल पता दर्ज करें' : 'Please enter a valid email address';
        return '';
      case 'phone':
        if (value.trim() && !isValidPhone(value)) {
          return lang === 'hi' ? 'कृपया 10-अंकीय वैध फोन नंबर दर्ज करें' : 'Please enter a valid 10-digit phone number';
        }
        return '';
      case 'message':
        if (!value.trim()) return lang === 'hi' ? 'संदेश लिखना अनिवार्य है' : 'Message is required';
        if (!isValidMessage(value, 10)) return lang === 'hi' ? 'संदेश कम से कम 10 अक्षरों का होना चाहिए' : 'Message must be at least 10 characters long';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };

    setErrors(formErrors);
    setTouched({ name: true, email: true, phone: true, message: true });

    const hasErrors = Object.values(formErrors).some(err => err !== '');
    if (hasErrors) return;

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      setTouched({});
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-gray-200 pt-24 pb-20">
      
      {/* Banner */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-[#12141e] to-[#080a0f] border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#ed5434] font-bold block mb-2">
            Get In Touch • Indore (Madhya Pradesh)
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-serif mb-4">
            {lang === 'hi' ? 'Drop Us A Line (संपर्क करें)' : 'Drop Us A Line'}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'काव्य पाठ, मीडिया साक्षात्कार अथवा सामान्य संवाद के लिए आपका संदेश सादर आमंत्रित है।'
              : 'Direct communication desk with the official management of Kavi Gaurav Sakshi in Indore.'}
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#10121a] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6 font-serif">
                Contacts Info (सचिवालय संपर्क)
              </h3>

              <div className="space-y-6 text-sm text-gray-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ed5434]/15 flex items-center justify-center text-[#ed5434] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white">Management Hotline</strong>
                    <span className="text-gray-400">{poetData.contact.bookingPhone}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ed5434]/15 flex items-center justify-center text-[#ed5434] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white">Official Email</strong>
                    <span className="text-gray-400">{poetData.contact.email}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ed5434]/15 flex items-center justify-center text-[#ed5434] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white">Office Address (Indore)</strong>
                    <span className="text-gray-400">{poetData.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#10121a] p-6 rounded-2xl border border-gray-800 text-xs text-gray-400 space-y-2">
              <span className="text-[#ed5434] font-bold uppercase tracking-wider block">Office Hours (Indore)</span>
              <p>Monday - Saturday: 10:00 AM - 07:00 PM (IST)</p>
              <p>Sunday: Emergency tour logistics only</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#0f111a] p-8 sm:p-10 rounded-2xl border border-gray-800 shadow-2xl">
              {sent ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-4 border border-green-500/40">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-xs text-gray-400">Our secretariat team in Indore will connect with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4 font-serif">
                    Drop Us A Line
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Dr. Rajesh Sharma"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#151722] border text-white text-sm focus:outline-none transition-colors ${
                          errors.name && touched.name ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-[#ed5434]'
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@domain.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#151722] border text-white text-sm focus:outline-none transition-colors ${
                          errors.email && touched.email ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-[#ed5434]'
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 98765 XXXXX"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#151722] border text-white text-sm focus:outline-none transition-colors ${
                        errors.phone && touched.phone ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-[#ed5434]'
                      }`}
                    />
                    {errors.phone && touched.phone && (
                      <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Write your message or inquiry here (minimum 10 characters)..."
                      className={`w-full px-4 py-2 rounded-xl bg-[#151722] border text-white text-sm focus:outline-none transition-colors ${
                        errors.message && touched.message ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-[#ed5434]'
                      }`}
                    />
                    {errors.message && touched.message && (
                      <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#ed5434] hover:bg-[#d94424] text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
