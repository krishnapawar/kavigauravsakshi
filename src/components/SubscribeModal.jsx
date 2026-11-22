import React, { useState } from 'react';
import { X, CheckCircle2, Bell, AlertCircle } from 'lucide-react';
import { isValidEmail, isValidPhone, isValidName } from '../utils/validators';

export const SubscribeModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (!isValidName(value)) return 'Please enter a valid name (at least 3 characters)';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!isValidEmail(value)) return 'Please enter a valid email address';
        return '';
      case 'mobile':
        if (!value.trim()) return 'Mobile number is required';
        if (!isValidPhone(value)) return 'Please enter a valid 10-digit mobile number';
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

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', mobile: '' });
      setErrors({});
      setTouched({});
      onClose();
    }, 2500);
  };

  return (
    <div id="modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-[#11131c] rounded-2xl border border-gray-700 p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Thank you for subscribing!</h3>
            <p className="text-xs text-gray-400">You will receive exclusive event announcements and poem releases.</p>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-2 text-[#ed5434] text-xs font-bold uppercase tracking-wider mb-2">
              <Bell className="w-4 h-4" />
              <span>VIP Fan Circle</span>
            </div>

            <h2 className="text-2xl font-bold text-white font-serif mb-2">
              Subscribe now for GS exclusive
            </h2>

            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              Stay connected with Kavi Gaurav Sakshi. Get early access to Kavi Sammelan passes and new videos.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Name: *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#181a24] border text-white text-sm focus:outline-none transition-colors ${
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
                <label className="block text-xs font-medium text-gray-300 mb-1">Email: *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="name@domain.com"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#181a24] border text-white text-sm focus:outline-none transition-colors ${
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

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Mobile: *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+91 98765 XXXXX"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#181a24] border text-white text-sm focus:outline-none transition-colors ${
                    errors.mobile && touched.mobile ? 'border-red-500 bg-red-950/20' : 'border-gray-700 focus:border-[#ed5434]'
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
                className="w-full py-3 rounded-xl bg-[#ed5434] hover:bg-[#d94424] text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
