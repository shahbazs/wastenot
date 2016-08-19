import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let user = this.store.createRecord('user');
    let address = Ember.Object.create();

    user.set('address', address);
    return user;
  },

  actions: {
    doDetails() {
      this.transitionTo('details');
    },

    doRegister() {
      this.get('currentModel').save()
      .then(() => {
        this.transitionTo('thanks');
      });
    }
  }
});
