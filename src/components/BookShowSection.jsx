import React, { useState } from 'react';
import { Mic, Calendar, Users, MapPin, Building, Mail, Phone, Clock, CheckCircle2, Sparkles, Send, ShieldCheck, HeartHandshake, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { poetData } from '../data/poetData';
import { isValidEmail, isValidPhone, isValidName, isValidFutureDate, isValidCity, getMinDateString } from '../utils/validators';

export const BookShowSection = ({ lang, selectedEvent, onClearSelectedEvent }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    eventType: selectedEvent ? selectedEvent.type : 'Kavi Sammelan',
    eventDate: selectedEvent ? selectedEvent.date : '',
    city: selectedEvent ? selectedEvent.cityEn : 'Indore, MP',
    venue: selectedEvent ? selectedEvent.venueEn : '',
    expectedAudience: '1000 - 3000',
    budgetRange: 'Standard Literary Rider',
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
        if (!value.trim()) return lang === 'hi' ? 'ईमेल पता अनिवार्य है' : 'Email address is required';
        if (!isValidEmail(value)) return lang === 'hi' ? 'कृपया वैध ईमेल पता दर्ज करें' : 'Please enter a valid email address';
        return '';
      case 'eventDate':
        if (!value) return lang === 'hi' ? 'इवेंट की तारीख अनिवार्य है' : 'Event date is required';
        if (!isValidFutureDate(value)) return lang === 'hi' ? 'इवेंट की तारीख आज या भविष्य की होनी चाहिए' : 'Event date must be today or in the future';
        return '';
      case 'city':
        if (!value.trim()) return lang === 'hi' ? 'शहर एवं राज्य अनिवार्य है' : 'City and state are required';
        if (!isValidCity(value)) return lang === 'hi' ? 'कृपया वैध शहर दर्ज करें' : 'Please enter a valid city';
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
    if (hasErrors) return;

    const randomId = 'GS-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(randomId);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  return (
    <section id="book-show" className="py-24 relative bg-[#08090d] border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] block mb-2 font-sans">
            {lang === 'hi' ? 'आधिकारिक बुकिंग एवं आमंत्रण • इंदौर' : 'Official Show Booking & Inquiries • Indore (MP)'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold gold-gradient-text devanagari-font mb-4">
            {lang === 'hi' ? 'अपने मंच पर आमंत्रित करें गौरव साक्षी को' : 'Host Kavi Gaurav Sakshi for Your Event'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4" />
          <p className="text-gray-300 font-serif italic text-base sm:text-lg">
            {lang === 'hi'
              ? 'कवि सम्मेलन, कॉलेज फेस्ट, कॉरपोरेट मीट अथवा निजी सांस्कृतिक महफिल के लिए बुकिंग सीधे आधिकारिक प्रबंधन के माध्यम से करें।'
              : 'Directly reserve dates for Kavi Sammelans, University Fests, Corporate Conclaves, and Private Musical Evenings.'}
          </p>
        </div>

        {/* 1. Event Formats Grid */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-gray-200 mb-6 text-center font-serif flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>{lang === 'hi' ? 'आयोजन के प्रमुख प्रारूप' : 'Popular Event Formats'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {poetData.eventTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => setFormData(prev => ({ ...prev, eventType: type.titleHi }))}
                className="glass-panel p-6 rounded-2xl border border-gold-500/20 hover:border-gold-500/50 hover:bg-[#151722] transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 transition-transform">
                    <Mic className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-100 group-hover:text-gold-300 transition-colors font-serif">
                    {lang === 'hi' ? type.titleHi : type.titleEn}
                  </h4>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-3">
                    {lang === 'hi' ? type.descHi : type.descEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-800 text-[11px] text-gray-400 flex flex-col space-y-1">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-gold-400" />
                    <span>Duration: {type.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Users className="w-3 h-3 text-gold-400" />
                    <span>Audience: {type.audience}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Four-Step Booking Process Roadmap */}
        <div className="mb-20 glass-panel p-8 sm:p-10 rounded-3xl border border-gold-500/30 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-center gold-gradient-text devanagari-font mb-2">
            {lang === 'hi' ? 'शो बुकिंग की 4-चरणीय सरल प्रक्रिया' : 'Transparent 4-Step Booking Roadmap'}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 text-center mb-10 max-w-xl mx-auto">
            {lang === 'hi'
              ? 'आधिकारिक प्रबंधन के साथ पारदर्शी और समयबद्ध प्रक्रिया'
              : 'Seamless, structured execution from inquiry to live stage performance.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {poetData.bookingProcess.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-start bg-[#12141c]/60 p-5 rounded-2xl border border-gray-800">
                <span className="text-3xl font-black text-gold-500/40 font-mono mb-2">
                  {step.step}
                </span>
                <h4 className="text-base font-bold text-gray-100 mb-2">
                  {lang === 'hi' ? step.titleHi : step.titleEn}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {lang === 'hi' ? step.descHi : step.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Booking Form & Organizer Help Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gold-500/20">
              <h4 className="text-xl font-bold text-gold-300 font-serif mb-4 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                <span>{lang === 'hi' ? 'आधिकारिक प्रबंधन की गारंटी' : 'Management Assurance'}</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>{lang === 'hi' ? '24 घंटे के भीतर टीम का त्वरित प्रत्युत्तर' : 'Guaranteed response within 24 business hours.'}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>{lang === 'hi' ? 'पारदर्शी बजट प्रस्ताव एवं टेक्निकल राइडर' : 'Detailed technical & acoustic rider provided upfront.'}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>{lang === 'hi' ? 'कॉरपोरेट एवं शैक्षणिक संस्थाओं हेतु जीएसटी बिलिंग' : 'Full GST invoicing for corporates & academic fests.'}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>{lang === 'hi' ? 'लाइव शो की शत-प्रतिशत सफलता का भरोसा' : 'Unmatched crowd engagement and standing ovations.'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#141620] p-6 rounded-2xl border border-gold-500/30">
              <h5 className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-3">
                {lang === 'hi' ? 'सीधा संपर्क / हॉटलाइन' : 'Direct Booking Hotline'}
              </h5>
              <div className="space-y-3 text-xs text-gray-300">
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gold-400" />
                  <strong className="text-gray-100">{poetData.contact.bookingPhone}</strong>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gold-400" />
                  <span className="text-gray-200">{poetData.contact.email}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>{poetData.contact.location}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-gold-500/30 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-10 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold gold-gradient-text devanagari-font mb-2">
                    {lang === 'hi' ? 'धन्यवाद! आपकी इन्क्वायरी दर्ज हो चुकी है।' : 'Inquiry Successfully Received!'}
                  </h3>
                  <p className="text-sm text-gray-300 mb-6 max-w-md mx-auto">
                    {lang === 'hi'
                      ? `संदर्भ संख्या (Reference ID): ${inquiryId}। गौरव साक्षी जी की प्रबंधन टीम (इंदौर) अगले 24 घंटों में आपके संपर्क नंबर पर बातचीत करेगी।`
                      : `Inquiry Ref ID: ${inquiryId}. The official management team in Indore will contact you within 24 hours.`}
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        organization: '',
                        phone: '',
                        email: '',
                        eventType: 'Kavi Sammelan',
                        eventDate: '',
                        city: 'Indore, MP',
                        venue: '',
                        expectedAudience: '1000 - 3000',
                        budgetRange: 'Standard Literary Rider',
                        message: ''
                      });
                      setErrors({});
                      setTouched({});
                    }}
                    className="px-6 py-2.5 rounded-full border border-gold-500/40 text-gold-300 hover:bg-gold-500/10 text-xs font-semibold"
                  >
                    {lang === 'hi' ? 'नई इन्क्वायरी दर्ज करें' : 'Submit Another Request'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="pb-2 border-b border-gray-800 mb-4">
                    <h4 className="text-lg font-bold text-gray-100 font-serif">
                      {lang === 'hi' ? 'इवेंट बुकिंग फॉर्म' : 'Official Booking Request Form'}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {lang === 'hi' ? 'कृपया आयोजन का सटीक विवरण साझा करें' : 'Please provide accurate details for prompt date confirmation.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        {lang === 'hi' ? 'आयोजक का पूरा नाम *' : 'Organizer Full Name *'}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={lang === 'hi' ? 'उदा. डॉ. राजेश शर्मा' : 'e.g. Dr. Rajesh Sharma'}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#12141d] border text-gray-100 text-sm focus:outline-none transition-colors ${
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
                        {lang === 'hi' ? 'संस्था / कॉलेज / कंपनी का नाम' : 'Organization / College / Company'}
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder={lang === 'hi' ? 'उदा. साहित्य सभा / आईआईटी' : 'e.g. Literary Council / IIT'}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#12141d] border border-gray-700 focus:border-gold-400 text-gray-100 text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        {lang === 'hi' ? 'मोबाइल नंबर (WhatsApp) *' : 'Mobile / WhatsApp Number *'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#12141d] border text-gray-100 text-sm focus:outline-none transition-colors ${
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
                        {lang === 'hi' ? 'ईमेल पता *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="organizer@domain.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#12141d] border text-gray-100 text-sm focus:outline-none transition-colors ${
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        {lang === 'hi' ? 'इवेंट का प्रारूप *' : 'Event Format *'}
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#12141d] border border-gray-700 focus:border-gold-400 text-gray-100 text-sm focus:outline-none"
                      >
                        <option value="Kavi Sammelan">{lang === 'hi' ? 'अखिल भारतीय कवि सम्मेलन' : 'All-India Kavi Sammelan'}</option>
                        <option value="College Fest">{lang === 'hi' ? 'कॉलेज / विश्वविद्यालय यूथ फेस्ट' : 'University & College Fest'}</option>
                        <option value="Corporate Gala">{lang === 'hi' ? 'कॉरपोरेट मीट एवं गाला' : 'Corporate Annual Meet'}</option>
                        <option value="Solo Evening">{lang === 'hi' ? 'एकल काव्य पाठ (Solo Recital)' : 'Solo Recital Evening'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        {lang === 'hi' ? 'प्रस्तावित तारीख *' : 'Proposed Event Date *'}
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        min={getMinDateString()}
                        value={formData.eventDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#12141d] border text-gray-100 text-sm focus:outline-none transition-colors ${
                          errors.eventDate && touched.eventDate ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-gold-400'
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
                        {lang === 'hi' ? 'शहर एवं राज्य *' : 'City & State *'}
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={lang === 'hi' ? 'उदा. इंदौर, मध्य प्रदेश' : 'e.g. Indore, MP'}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#12141d] border text-gray-100 text-sm focus:outline-none transition-colors ${
                          errors.city && touched.city ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-gold-400'
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
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        {lang === 'hi' ? 'अपेक्षित दर्शक संख्या' : 'Expected Audience Size'}
                      </label>
                      <select
                        name="expectedAudience"
                        value={formData.expectedAudience}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#12141d] border border-gray-700 focus:border-gold-400 text-gray-100 text-sm focus:outline-none"
                      >
                        <option value="Under 500">Under 500 Attendees</option>
                        <option value="500 - 1500">500 - 1,500 Attendees</option>
                        <option value="1500 - 5000">1,500 - 5,000 Attendees</option>
                        <option value="5000+">5,000+ (Grand Stadium / Ground)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      {lang === 'hi' ? 'विशेष संदेश अथवा आवश्यकताएं' : 'Special Notes or Rider Requirements'}
                    </label>
                    <textarea
                      rows="3"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={lang === 'hi' ? 'वेन्यू, ऑडिटोरियम अथवा अन्य कोई विशेष जानकारी...' : 'Venue specs, sound arrangements, or specific preferences...'}
                      className="w-full px-4 py-2 rounded-xl bg-[#12141d] border border-gray-700 focus:border-gold-400 text-gray-100 text-sm focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-black font-bold text-base shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{lang === 'hi' ? 'बुकिंग इन्क्वायरी सबमिट करें' : 'Submit Official Booking Request'}</span>
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
