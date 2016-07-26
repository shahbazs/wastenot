import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('about');
  this.route('form');
  this.route('services');
  this.route('take');
});

export default Router;
