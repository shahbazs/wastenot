import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // don't ask the API for a user's data
    return this.store.peekRecord('user', params.user_id);
  },

  actions: {
    doSubmitDetails() {
      this.transitionTo('thanks');
    }
  }
});
