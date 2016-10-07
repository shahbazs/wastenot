import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  model: null,

  usersSorting: ['insertedAt:desc'],
  sortedUsers: computed.sort('model', 'usersSorting')
});
