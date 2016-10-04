import Ember from 'ember';
import { buildValidations } from 'ember-cp-validations';
import { optional, required, email } from 'wastenot/utils/user-validations';

const { Component } = Ember;

const Validations = buildValidations({
  'model.email': email,
  'model.firstName': required,
  'model.lastName': optional
});

export default Component.extend(Validations, {
  submitButtonText: 'SUBMIT',
  detailsButtonText: 'GET COMPOSTING ASAP',
  model: null
});
