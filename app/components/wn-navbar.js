import Ember from 'ember';
import EmberMaterialNavbar from 'ember-cli-materialize/components/md-navbar';

const { computed, inject } = Ember;

export default EmberMaterialNavbar.extend({
  session: inject.service(),

  isAdmin: computed.notEmpty('session.currentAdmin'),

  navLinks: [
    { text: 'About', route: 'about' },
    { text: 'Services', route: 'services' },
    { text: 'Register', route: 'register' }
  ],

  adminLinks: [
    { text: 'Users', route: 'admin.users' },
    { text: 'Logout', route: 'admin.logout' }
  ]
});
