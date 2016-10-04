// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

import Ember from 'ember';

const { Object: EmberObject, Route, run } = Ember;

export default Route.extend({
  model(params) {
    let user = this.store.createRecord('user', { id: params.user_id });
    let address = EmberObject.create();
    let details = EmberObject.create({
      residenceTypes: []
    });

    user.setProperties({ address, details });
    return user;
  },

  setupController(controller/*, model*/) {
    this._super(...arguments);

    let residenceTypes = [
      { name: 'Single Family', value: 'single-family' },
      { name: 'Two Flat', value: 'two-flat' },
      { name: 'Single Condominium', value: 'single-condominium' }
    ];

    controller.setProperties({ residenceTypes });
  },

  actions: {
    doSubmit() {
      run.debounce(this, '_submit', 50);
    }
  },

  _submit() {
    this.get('currentModel').save({
      adapterOptions: { action: 'details' }
    })
    .then(() => {
      this.transitionTo('thanks');
    })
    // TODO: show validation errors in the form
    .catch((err) => {
      let errors = this.get('currentModel.errors');
      console.warn({ err, errors });
    });
  }
});
