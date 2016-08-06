import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });

  this.route('about');
  this.route('details');
  this.route('form');
  this.route('register');
  this.route('services');
  this.route('thanks');

  this.route('auth', function() {
    this.route('login');
  });
});

export default Router;
