import Ember from 'ember';

const { Route, run } = Ember;

export default Route.extend({
  actions: {
    doLogin() {
      run.debounce(this, 'login', 50);
    }
  },

  model() {
    return { email: '', password: '' };
  },

  login() {
    console.log('login');
  }
});
