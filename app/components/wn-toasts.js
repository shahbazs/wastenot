import Ember from 'ember';

const { Component, inject, computed } = Ember;

export default Component.extend({
  classNames: ['toasts'],
  flashMessages: inject.service(),

  // reverse the order of messages so they are shown bottom-to-top
  reversedFlashQueue: computed('flashMessages.arrangedQueue.[]', function() {
    return this.get('flashMessages.arrangedQueue').reverse();
  })
});
