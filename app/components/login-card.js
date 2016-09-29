import Ember from 'ember';
import { buildValidations } from 'ember-cli-validations';
import { email, password } from 'wastenot/utils/admin-validations';

const { Component } = Ember;

const Validations = buildValidations({
  'model.email': email,
  'model.password': password
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
