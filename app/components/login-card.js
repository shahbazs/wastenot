import Ember from 'ember';
import { buildValidations } from 'ember-cp-validations';
import { email, required } from 'wastenot/utils/user-validations';

const { Component } = Ember;

const Validations = buildValidations({
  'model.email': email,
  'model.password': required
});

export default Component.extend(Validations, {
  buttonText: 'Login',
  model: null,

  // Submit on enter key
  keyPress(event) {
    let { originalEvent } = event;
    if (originalEvent.which === 13) {
      this.attrs.onsubmit();
    }
  }
});
