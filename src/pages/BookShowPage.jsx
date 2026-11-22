import React, { useState } from 'react';
import { Mic, Send, CheckCircle2, Clock, Users, Building, Phone, Mail, MapPin, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { poetData } from '../data/poetData';
import { isValidEmail, isValidPhone, isValidName, isValidFutureDate, isValidCity, getMinDateString } from '../utils/validators';

export const BookShowPage = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    eventType: 'Akhil Bharatiya Kavi Sammelan',
    eventDate: '',
    city: 'Indore, MP',
    expectedAudience: '1000 - 3000',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return lang === 'hi' ? 'नाम दर्ज करना अनिवार्य है' : 'Full name is required';
        if (!isValidName(value)) return lang === 'hi' ? 'कृपया एक वैध नाम दर्ज करें (कम से कम 3 अक्षर)' : 'Please enter a valid name (at least 3 characters)';
        return '';
      case 'phone':
        if (!value.trim()) return lang === 'hi' ? 'फोन / व्हाट्सएप नंबर अनिवार्य है' : 'Phone / WhatsApp is required';
        if (!isValidPhone(value)) return lang === 'hi' ? 'कृपया 10-अंकीय वैध मोबाइल नंबर दर्ज करें' : 'Please enter a valid 10-digit mobile number';
        return '';
      case 'email':
        if (!value.trim()) return lang === 'hi' ? 'ईमेल पता दर्ज करना अनिवार्य है' : 'Email address is required';
        if (!isValidEmail(value)) return lang === 'hi' ? 'कृपया एक वैध ईमेल पता दर्ज करें (उदा. name@domain.com)' : 'Please enter a valid email address';
        return '';
      case 'eventDate':
        if (!value) return lang === 'hi' ? 'इवेंट की तारीख चुनना अनिवार्य है' : 'Event date is required';
        if (!isValidFutureDate(value)) return lang === 'hi' ? 'इवेंट की तारीख आज या भविष्य की होनी चाहिए' : 'Event date must be today or in the future';
        return '';
      case 'city':
        if (!value.trim()) return lang === 'hi' ? 'शहर एवं राज्य दर्ज करना अनिवार्य है' : 'City and state are required';
        if (!isValidCity(value)) return lang === 'hi' ? 'कृपया वैध शहर का नाम दर्ज करें' : 'Please enter a valid city name';
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

    // Validate all fields
    const formErrors = {
      name: validateField('name', formData.name),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email),
      eventDate: validateField('eventDate', formData.eventDate),
      city: validateField('city', formData.city)
    };

    setErrors(formErrors);
    setTouched({
      name: true,
      phone: true,
      email: true,
      eventDate: true,
      city: true
    });

    const hasErrors = Object.values(formErrors).some(err => err !== '');
    if (hasErrors) {
      // Scroll to the first error
      return;
    }

    const refId = 'GS-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(refId);
    setSubmitted(true);
    try {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    } catch (err) {}
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-gray-200 pt-24 pb-20">
      
      {/* Banner */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-[#12141e] to-[#080a0f] border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#ed5434] font-bold block mb-2">
            Official Bookings & Tour Dates • Secretariat: Indore (MP)
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-serif mb-4">
            {lang === 'hi' ? 'Book Kavi Gaurav Sakshi for Your Event' : 'Book Kavi Gaurav Sakshi for Your Event'}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'अखिल भारतीय कवि सम्मेलन, कॉलेज एनुअल फेस्ट, कॉरपोरेट गाला एवं एकल काव्य पाठ हेतु'
              : 'The unmatched charisma of Gaurav Sakshi for Kavi Sammelans, College Fests, and Corporate Galas.'}
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* 1. Event Types Grid */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-serif text-center">
            The Unmatched Charisma for Every Occasion (Event Formats)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {poetData.eventTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => setFormData(prev => ({ ...prev, eventType: type.titleHi }))}
                className="bg-[#10121a] p-6 rounded-2xl border border-gray-800 hover:border-[#ed5434]/50 cursor-pointer transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#ed5434]/20 flex items-center justify-center text-[#ed5434] mb-4 group-hover:scale-110 transition-transform">
                    <Mic className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-serif group-hover:text-[#ed5434] transition-colors">{lang === 'hi' ? type.titleHi : type.titleEn}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{lang === 'hi' ? type.descHi : type.descEn}</p>
                </div>
                <div className="pt-3 border-t border-gray-800 text-[11px] text-gray-500 space-y-1">
                  <p>Duration: {type.duration}</p>
                  <p>Audience: {type.audience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 4-Step Booking Process Roadmap */}
        <div className="mb-20 bg-[#0d0f17] p-8 sm:p-12 rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-bold text-white text-center mb-10 font-serif">
            Booking Process (4 सरल चरण)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {poetData.bookingProcess.map((step, idx) => (
              <div key={idx} className="bg-[#141622] p-5 rounded-xl border border-gray-800">
                <span className="text-3xl font-black text-[#ed5434] font-mono block mb-2">{step.step}</span>
                <h4 className="text-base font-bold text-white mb-1">{lang === 'hi' ? step.titleHi : step.titleEn}</h4>
                <p className="text-xs text-gray-400">{lang === 'hi' ? step.descHi : step.descEn}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Booking Form & Secretariat Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#10121a] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4 font-serif">
                Secretariat & Booking Desk
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                All tour dates are scheduled directly through the official management team based in Indore, Madhya Pradesh. Prompt response within 24 hours.
              </p>

              <div className="space-y-4 text-xs text-gray-300">
                <p className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#ed5434]" />
                  <span><strong>Direct:</strong> {poetData.contact.bookingPhone}</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#ed5434]" />
                  <span>{poetData.contact.email}</span>
                </p>
                <p className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-[#ed5434]" />
                  <span>{poetData.contact.location}</span>
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-[#10121a] border border-gray-800 text-xs text-gray-400 italic">
              “गौरव साक्षी के लाइव काव्य पाठ से हर सभागार मंत्रमुग्ध हो जाता है। कार्यक्रम की सफलता की पूरी गारंटी।”
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#0f111a] p-8 sm:p-10 rounded-2xl border border-gray-800 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-4 border border-green-500/40">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {lang === 'hi' ? 'इन्क्वायरी सफलतापूर्वक दर्ज हो चुकी है!' : 'Inquiry Received Successfully!'}
                  </h3>
                  <p className="text-sm text-gray-300 mb-6">
                    Reference ID: <strong className="text-[#ed5434]">{inquiryId}</strong>. Our management team in Indore will call you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        organization: '',
                        phone: '',
                        email: '',
                        eventType: 'Akhil Bharatiya Kavi Sammelan',
                        eventDate: '',
                        city: 'Indore, MP',
                        expectedAudience: '1000 - 3000',
                        message: ''
                      });
                      setErrors({});
                      setTouched({});
                    }}
                    className="px-6 py-2 rounded-full border border-gray-700 text-xs font-semibold text-gray-300 hover:bg-white/10"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4 font-serif">
                    Booking Form (आयोजन विवरण फॉर्म)
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        Organizer Full Name *
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
                      <label className="block text-xs font-medium text-gray-300 mb-1">Organization / Institution</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="IIT / Sahitya Council"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#151722] border border-gray-700 text-white text-sm focus:outline-none focus:border-[#ed5434]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+91 98765 43210"
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
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="organizer@domain.com"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Event Type *</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#151722] border border-gray-700 text-white text-sm focus:outline-none focus:border-[#ed5434]"
                      >
                        <option value="Akhil Bharatiya Kavi Sammelan">Akhil Bharatiya Kavi Sammelan</option>
                        <option value="College Fest">University & College Youth Fest</option>
                        <option value="Corporate Gala">Corporate Annual Conclave</option>
                        <option value="Solo Evening">Solo Recital (एक शाम गौरव साक्षी)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        Proposed Event Date *
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        min={getMinDateString()}
                        value={formData.eventDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#151722] border text-white text-sm focus:outline-none transition-colors ${
                          errors.eventDate && touched.eventDate ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-[#ed5434]'
                        }`}
                      />
                      {errors.eventDate && touched.eventDate && (
                        <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.eventDate}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        City & State *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Indore, MP"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#151722] border text-white text-sm focus:outline-none transition-colors ${
                          errors.city && touched.city ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-[#ed5434]'
                        }`}
                      />
                      {errors.city && touched.city && (
                        <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.city}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Expected Audience</label>
                      <select
                        name="expectedAudience"
                        value={formData.expectedAudience}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#151722] border border-gray-700 text-white text-sm focus:outline-none focus:border-[#ed5434]"
                      >
                        <option value="Under 500">Under 500 Attendees</option>
                        <option value="500 - 1500">500 - 1,500 Attendees</option>
                        <option value="1500 - 5000">1,500 - 5,000 Attendees</option>
                        <option value="5000+">5,000+ (Grand Stadium)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Special Requirements / Notes</label>
                    <textarea
                      rows="3"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Venue details, sound setup, or preferences..."
                      className="w-full px-4 py-2 rounded-xl bg-[#151722] border border-gray-700 text-white text-sm focus:outline-none focus:border-[#ed5434]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#ed5434] hover:bg-[#d94424] text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Booking Request</span>
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
