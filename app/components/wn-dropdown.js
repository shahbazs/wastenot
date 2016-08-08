import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'a',
  classNames: ['btn', 'dropdown-button'],

  didRender() {
    this._super(...arguments);

    this.$().attr('data-activates', this.get('_dropdownContentId'));
    this.$('.dropdown-button').dropdown();
  },

  _dropdownContentId: computed(function() {
    return `${this.get('elementId')}-dropdown-content`;
  })
});
