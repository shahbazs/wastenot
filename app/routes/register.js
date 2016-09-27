import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
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
      // TODO: show validation errors in the form
      .catch((err) => {
        let errors = model.get('errors');
        console.warn({ err, errors });
      });
    },

    doRegister() {
      this.get('currentModel').save({
        adapterOptions: { action: 'register' }
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
  }
});
