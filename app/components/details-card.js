import Ember from 'ember';
import { buildValidations } from 'ember-cp-validations';
import {
  optional, required, phone, state, zip
} from 'wastenot/utils/user-validations';

const { Component } = Ember;

const Validations = buildValidations({
  'model.address.apt': optional,
  'model.address.city': required,
  'model.address.house': optional,
  'model.address.state': state,
  'model.address.street': optional,
  'model.address.zip': zip,
  'model.phone': phone
});

export default Component.extend(Validations, {
  buttonText: 'SUBMIT',
  model: null
});
