import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doSubmitDetails() {
      this.transitionTo('thanks');
    }
  }
});
