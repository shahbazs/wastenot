import Ember from 'ember';

const { Route, inject, run } = Ember;

export default Route.extend({
  session: inject.service(),

  model() {
    return { email: '', password: '' };
  },

  actions: {
    doLogin() {
      run.debounce(this, '_login', 50);
    }
  },

  _login() {
    let admin = this.get('currentModel');

    this.get('session')
    .authenticate('authenticator:wastenot', admin.email, admin.password);
  }
});
