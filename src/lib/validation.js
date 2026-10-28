/**
 * Lead & Form Validation Utilities for DigMa IT Solutions
 */

export const SERVICE_OPTIONS = [
  'web-development',
  'app-development',
  'digital-marketing'
];

export const TIMELINE_OPTIONS = [
  'immediate',
  '1-month',
  '1-3-months',
  'flexible'
];

/**
 * Basic string sanitizer to strip out potential dangerous markup
 */
export function sanitizeInput(value) {
  if (typeof value !== 'string') return '';
  return value
    .trim()
    .replace(/[<>]/g, '')
    .slice(0, 1500);
}

/**
 * Validates standard email address
 */
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email.trim());
}

/**
 * Validates international/standard phone number formats (optional or 7-15 digits)
 */
export function isValidPhone(phone) {
  if (!phone) return true; // Optional field
  const sanitized = phone.replace(/[\s\-\(\)\+\.]/g, '');
  return /^[0-9]{7,15}$/.test(sanitized);
}

/**
 * Validates full lead form submission payload
 */
export function validateLeadForm(data) {
  const errors = {};

  const name = sanitizeInput(data.name || '');
  const email = (data.email || '').trim().toLowerCase();
  const phone = (data.phone || '').trim();
  const service = (data.service || '').trim();
  const budget = (data.budget || '').trim();
  const message = sanitizeInput(data.message || '');

  // Name validation
  if (!name) {
    errors.name = 'Full name is required.';
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  } else if (name.length > 80) {
    errors.name = 'Name must be under 80 characters.';
  }

  // Email validation
  if (!email) {
    errors.email = 'Email address is required.';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please provide a valid business email address.';
  }

  // Phone validation (if provided)
  if (phone && !isValidPhone(phone)) {
    errors.phone = 'Please provide a valid contact phone number.';
  }

  // Service selection validation
  if (!service) {
    errors.service = 'Please select a service of interest.';
  }

  // Message validation
  if (!message) {
    errors.message = 'Please provide a brief description of your project.';
  } else if (message.length < 15) {
    errors.message = 'Project description must be at least 15 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData: {
      name,
      email,
      phone,
      company: sanitizeInput(data.company || ''),
      service,
      timeline: sanitizeInput(data.timeline || ''),
      budget: budget || 'not-specified',
      message
    }
  };
}
