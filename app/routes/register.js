import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doDetails() {
      alert('Details attempted');
    },

    doRegister() {
      alert('Registration attempted');
    }
  }
});
