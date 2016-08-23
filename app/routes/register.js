import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let user = this.store.createRecord('user');
    let address = Ember.Object.create();
    let details = Ember.Object.create();

    user.setProperties({ address, details });
    return user;
  },

  actions: {
    doDetails() {
      this.get('currentModel').save()
      .then((user) => {
        this.transitionTo('details', user);
      })
      .catch((err) => {
        console.warn({ err });
      });
    },

    doRegister() {
      this.get('currentModel').save()
      .then(() => {
        this.transitionTo('thanks');
      })
      .catch((err) => {
        console.warn({ err });
      });
    }
  }
});
