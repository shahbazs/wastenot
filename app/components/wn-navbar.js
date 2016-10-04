import Ember from 'ember';

const { Component, computed, inject } = Ember;

export default Component.extend({
  session: inject.service(),

  isAdmin: computed.notEmpty('session.currentAdmin')
});
