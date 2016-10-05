import Ember from 'ember';

const { Route, inject, run } = Ember;

export default Route.extend({
  flashMessages: inject.service(),
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
    .authenticate('authenticator:wastenot', admin.email, admin.password)
    .then(() => {
      // Success
      this.get('flashMessages').success('Logged in as Admin');
    })
    .catch((response) => {
      let { errors } = response;
      if (errors.mapBy('code').indexOf(401) >= 0) {
        // Unauthorized
        this.get('flashMessages')
        .danger(
          'There was a problem with your username or password, please try again'
        );
      } else {
        // Other API error
        this.get('flashMessages').danger('Server Error');
      }
    });
  }
});
