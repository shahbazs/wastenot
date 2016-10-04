import { validator } from 'ember-cp-validations';

// Generic

export const optional = [
  validator('length', { max: 255 })
];

export const required = [
  validator('presence', true),
  validator('length', { min: 1, max: 255 })
];

// Specific

export const email = [
  validator('presence', true),
  validator('format', { type: 'email' })
];

export const phone = [
  validator('format', { type: 'phone' })
];

export const state = [
  validator('presence', true),
  validator('length', { is: 2 }),
  validator('format', {
    regex: /^il$/i,
    message: 'This field must represent Illinois'
  })
];

export const zip = [
  validator('format', {
    regex: /^\d{5}(?:[-\s]?\d{4})?$/,
    message: 'This field must be a 5 or 9 digit zip code'
  })
];

export default {
  optional, required, email, phone, state, zip
};
