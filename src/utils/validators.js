/**
 * Form Validation Utilities for Kavi Gaurav Sakshi Portal
 */

export const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email.trim());
};

export const isValidPhone = (phone) => {
  if (!phone || typeof phone !== 'string') return false;
  // Clean spaces, dashes, brackets
  const clean = phone.replace(/[\s\-\(\)\.]/g, '');
  // Matches optional +91 or +country code, followed by 10 to 14 digits
  const regex = /^(\+?[0-9]{1,4})?[0-9]{10}$/;
  return regex.test(clean) || /^\+?[0-9]{10,14}$/.test(clean);
};

export const isValidName = (name) => {
  if (!name || typeof name !== 'string') return false;
  const trimmed = name.trim();
  // At least 3 chars, supports English and Hindi Devanagari script + spaces & periods
  return trimmed.length >= 3 && /^[a-zA-Z\u0900-\u097F\s\.\'\-]+$/.test(trimmed);
};

export const isValidFutureDate = (dateStr) => {
  if (!dateStr) return false;
  const selected = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return !isNaN(selected.getTime()) && selected >= today;
};

export const isValidCity = (city) => {
  if (!city || typeof city !== 'string') return false;
  return city.trim().length >= 2;
};

export const isValidMessage = (message, minLength = 10) => {
  if (!message || typeof message !== 'string') return false;
  return message.trim().length >= minLength;
};

export const getMinDateString = () => {
  return new Date().toISOString().split('T')[0];
};

