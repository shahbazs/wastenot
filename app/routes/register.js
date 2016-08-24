import Ember from 'ember';

export default Ember.Route.extend({
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
      console.debug({ serviceType });

      model.save()
      .then((user) => {
        if (serviceType === 'commercial') {
          this.transitionTo('thanks');
        } else {
          this.transitionTo('details', user);
        }
      })
      .catch((err) => {
        console.warn({ err });
        let errors = model.get('errors');
        console.warn({ errors });
      });
    },

    doRegister() {
      this.get('currentModel').save()
      .then(() => {
        this.transitionTo('thanks');
      })
      .catch((err) => {
        console.warn({ err });
        let errors = this.get('currentModel.errors');
        console.warn({ errors });
      });
    }
  }
});
