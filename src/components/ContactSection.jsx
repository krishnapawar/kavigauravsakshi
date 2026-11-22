import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { poetData } from '../data/poetData';
import { isValidEmail, isValidPhone, isValidName, isValidMessage } from '../utils/validators';

export const ContactSection = ({ lang }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return lang === 'hi' ? 'नाम दर्ज करना अनिवार्य है' : 'Name is required';
        if (!isValidName(value)) return lang === 'hi' ? 'कृपया कम से कम 3 अक्षरों का वैध नाम दर्ज करें' : 'Please enter a valid name (at least 3 characters)';
        return '';
      case 'email':
        if (!value.trim()) return lang === 'hi' ? 'ईमेल पता अनिवार्य है' : 'Email is required';
        if (!isValidEmail(value)) return lang === 'hi' ? 'कृपया वैध ईमेल दर्ज करें' : 'Please enter a valid email address';
        return '';
      case 'phone':
        if (value.trim() && !isValidPhone(value)) {
          return lang === 'hi' ? 'कृपया 10-अंकीय वैध फोन नंबर दर्ज करें' : 'Please enter a valid 10-digit phone number';
        }
        return '';
      case 'message':
        if (!value.trim()) return lang === 'hi' ? 'संदेश लिखना अनिवार्य है' : 'Message is required';
        if (!isValidMessage(value, 10)) return lang === 'hi' ? 'संदेश कम से कम 10 अक्षरों का होना चाहिए' : 'Message must be at least 10 characters';
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

    if (Object.values(formErrors).some(err => err !== '')) return;

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      setTouched({});
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090a0e] border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] block mb-2 font-sans">
            {lang === 'hi' ? 'सीधा संपर्क एवं संवाद • इंदौर' : 'Drop Us A Line / Get in Touch • Indore (MP)'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold gold-gradient-text devanagari-font mb-4">
            {lang === 'hi' ? 'प्रबंधन टीम से संपर्क करें' : 'Connect with Official Management'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4" />
          <p className="text-gray-300 font-serif italic text-base sm:text-lg">
            {lang === 'hi'
              ? 'काव्य पाठ, मीडिया साक्षात्कार अथवा सामान्य संवाद के लिए आपका संदेश सादर आमंत्रित है।'
              : 'For literary recitals, media interviews, press features, or direct queries.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gold-500/20">
              <h3 className="text-xl font-bold text-gold-300 font-serif mb-6">
                {lang === 'hi' ? 'कार्यालय एवं संपर्क सूत्र (इंदौर)' : 'Official Secretariat (Indore)'}
              </h3>

              <div className="space-y-6 text-sm text-gray-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-gray-100">{lang === 'hi' ? 'बुकिंग व प्रबंधन फोन' : 'Booking & Management'}</strong>
                    <span className="text-gray-400">{poetData.contact.bookingPhone}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-gray-100">{lang === 'hi' ? 'आधिकारिक ईमेल' : 'Official Email'}</strong>
                    <span className="text-gray-400">{poetData.contact.email}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-gray-100">{lang === 'hi' ? 'सचिवालय पता (इंदौर)' : 'Headquarters Address'}</strong>
                    <span className="text-gray-400">{poetData.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#11131c] p-6 rounded-2xl border border-gold-500/20 text-xs text-gray-400 space-y-2">
              <span className="text-gold-400 font-bold uppercase tracking-wider block">
                {lang === 'hi' ? 'कार्य समय (इंदौर)' : 'Business Hours (Indore)'}
              </span>
              <p>{lang === 'hi' ? 'सोमवार - शनिवार: प्रातः 10:00 बजे से सायं 7:00 बजे (IST)' : 'Monday - Saturday: 10:00 AM - 07:00 PM (IST)'}</p>
              <p>{lang === 'hi' ? 'रविवार: केवल आपातकालीन शो समन्वय' : 'Sunday: Emergency Tour Logistics Only'}</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-gold-500/20 shadow-2xl">
              {sent ? (
                <div className="py-12 text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">
                    {lang === 'hi' ? 'संदेश सफलतापूर्वक भेज दिया गया है!' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="text-xs text-gray-300">
                    {lang === 'hi' ? 'हमारी टीम शीघ्र ही आपसे संपर्क करेगी।' : 'Our secretariat team in Indore will connect with you shortly.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-100 font-serif mb-4">
                    {lang === 'hi' ? 'सीधा संदेश भेजें' : 'Send Direct Message'}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        {lang === 'hi' ? 'नाम *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={lang === 'hi' ? 'आपका नाम' : 'Your Full Name'}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#141620] border text-gray-100 text-sm focus:outline-none transition-colors ${
                          errors.name && touched.name ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-gold-400'
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
                        {lang === 'hi' ? 'ईमेल *' : 'Your Email *'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@domain.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#141620] border text-gray-100 text-sm focus:outline-none transition-colors ${
                          errors.email && touched.email ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-gold-400'
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
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      {lang === 'hi' ? 'मोबाइल नंबर' : 'Phone / Mobile'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 98765 XXXXX"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#141620] border text-gray-100 text-sm focus:outline-none transition-colors ${
                        errors.phone && touched.phone ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-gold-400'
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
                      {lang === 'hi' ? 'संदेश *' : 'Message *'}
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={lang === 'hi' ? 'अपनी बात या प्रश्न यहाँ लिखें (कम से कम 10 अक्षर)...' : 'Type your message or inquiry here (min 10 chars)...'}
                      className={`w-full px-4 py-2 rounded-xl bg-[#141620] border text-gray-100 text-sm focus:outline-none transition-colors ${
                        errors.message && touched.message ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-gold-400'
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
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-black font-bold text-sm shadow-lg shadow-gold-500/20 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'hi' ? 'संदेश प्रेषित करें' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
