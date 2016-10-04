import Ember from 'ember';
import ENV from 'wastenot/config/environment';
import fetch from 'ember-network/fetch';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),

  beforeModel() {
    if (!this.get('session').get('isAuthenticated')) {
      this.transitionTo('auth.login');
    }
  },

  afterModel() {
    let accessToken = this.get('session')
    .get('session.content.authenticated.access_token');

    console.debug({ accessToken });

    return fetch(`${ENV.DS.host}/admin/current`, {
      type: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then((raw) => {
      console.debug({ raw });
      return raw.json().then((admin) => {
        let currentAdmin = this.store.push(admin);

        this.set('session.currentAdmin', currentAdmin);
      });
    });
  }
});
