import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),

  beforeModel() {
    this.get('session').invalidate();
  }
});
