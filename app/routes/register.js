import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doDetails() {
      this.transitionTo('details');
    },

    doRegister() {
      this.transitionTo('thanks');
    }
  }
});
