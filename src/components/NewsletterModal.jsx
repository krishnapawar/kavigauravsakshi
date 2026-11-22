import React, { useState } from 'react';
import { X, Bell, CheckCircle2, Sparkles, Send, AlertCircle } from 'lucide-react';
import { isValidEmail, isValidPhone, isValidName } from '../utils/validators';

export const NewsletterModal = ({ isOpen, onClose, lang }) => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return lang === 'hi' ? 'नाम अनिवार्य है' : 'Name is required';
        if (!isValidName(value)) return lang === 'hi' ? 'कृपया कम से कम 3 अक्षरों का वैध नाम लिखें' : 'Please enter at least 3 letters';
        return '';
      case 'email':
        if (!value.trim()) return lang === 'hi' ? 'ईमेल अनिवार्य है' : 'Email is required';
        if (!isValidEmail(value)) return lang === 'hi' ? 'कृपया एक वैध ईमेल पता दर्ज करें' : 'Please enter a valid email address';
        return '';
      case 'mobile':
        if (value.trim() && !isValidPhone(value)) {
          return lang === 'hi' ? 'कृपया 10-अंकीय वैध मोबाइल नंबर लिखें' : 'Please enter a valid 10-digit mobile number';
        }
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
      mobile: validateField('mobile', formData.mobile)
    };

    setErrors(formErrors);
    setTouched({ name: true, email: true, mobile: true });

    if (Object.values(formErrors).some(err => err !== '')) return;

    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setFormData({ name: '', email: '', mobile: '' });
      setErrors({});
      setTouched({});
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-[#12141c] rounded-3xl border border-gold-500/40 p-6 sm:p-8 shadow-2xl text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {subscribed ? (
          <div className="py-8 text-center animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold gold-gradient-text devanagari-font mb-2">
              {lang === 'hi' ? 'साक्षी परिवार में आपका स्वागत है!' : 'Welcome to the Sakshi Literary Circle!'}
            </h3>
            <p className="text-xs text-gray-300">
              {lang === 'hi'
                ? 'आपको आगामी कवि सम्मेलनों के वीआईपी पास एवं नई रचनाओं के अलर्ट सबसे पहले प्राप्त होंगे।'
                : 'You will receive priority passes for upcoming live tours and unreleased poetry alerts.'}
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'hi' ? 'विशेष साहित्यिक क्लब' : 'VIP Literary Newsletter'}</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-100 font-serif mb-2 devanagari-font">
              {lang === 'hi' ? 'गौरव साक्षी एक्सक्लूसिव क्लब' : 'Subscribe For Exclusive Updates'}
            </h3>

            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              {lang === 'hi'
                ? 'देश-विदेश के आगामी कवि सम्मेलनों की तिथियां, विशेष सीटिंग पास एवं नई ग़ज़लें सीधे अपने फोन व इनबॉक्स में पाएं।'
                : 'Get early-bird tour tickets, VIP seating announcements, and new poetry releases.'}
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  {lang === 'hi' ? 'नाम *' : 'Name *'}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={lang === 'hi' ? 'आपका शुभ नाम' : 'Your Name'}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#181a24] border text-gray-100 text-sm focus:outline-none transition-colors ${
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
                  {lang === 'hi' ? 'ईमेल *' : 'Email *'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="name@domain.com"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#181a24] border text-gray-100 text-sm focus:outline-none transition-colors ${
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

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  {lang === 'hi' ? 'मोबाइल नंबर (WhatsApp)' : 'Mobile (WhatsApp)'}
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+91 98765 XXXXX"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#181a24] border text-gray-100 text-sm focus:outline-none transition-colors ${
                    errors.mobile && touched.mobile ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-gold-400'
                  }`}
                />
                {errors.mobile && touched.mobile && (
                  <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.mobile}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-black font-bold text-sm shadow-lg shadow-gold-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
              >
                <Bell className="w-4 h-4" />
                <span>{lang === 'hi' ? 'सब्सक्राइब करें' : 'Subscribe Now'}</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
