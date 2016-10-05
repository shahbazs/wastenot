import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  flashMessages: inject.service(),

  model() {
    // residential by default
    return this.store.createRecord('user', {
      serviceType: 'residential'
    });
  },

  actions: {
    doDetails() {
      let model = this.get('currentModel');
      let serviceType = model.get('serviceType');

      model.save({
        adapterOptions: { action: 'register' }
      })
      .then((user) => {
        if (serviceType === 'commercial') {
          this.transitionTo('thanks');
        } else {
          this.transitionTo('details', user);
        }
      })
      .catch((response) => {
        this._doErrors(response);
      });
    },

    doRegister() {
      this.get('currentModel').save({
        adapterOptions: { action: 'register' }
      })
      .then(() => {
        this.transitionTo('thanks');
      })
      .catch((response) => {
        this._doErrors(response);
      });
    }
  },

  _doErrors(response) {
    let { errors } = response;
    this.get('flashMessages')
    .danger(errors.mapBy('detail')
    .join(', '));
  }
});
