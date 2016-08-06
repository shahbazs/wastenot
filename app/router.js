import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('details');
  this.route('form');
  this.route('home');
  this.route('services');
  this.route('take');
  this.route('thanks');
});

export default Router;
