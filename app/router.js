import Ember from 'ember';
import config from './config/environment';

const { Router: EmberRouter } = Ember;

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });

  this.route('about');
  this.route('details', { path: '/details/:user_id' });
  this.route('register');
  this.route('services');
  this.route('thanks');

  this.route('auth', function() {
    this.route('login');
  });
});

export default Router;
