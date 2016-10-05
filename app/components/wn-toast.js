import Ember from 'ember';

const {
  Component,
  computed,
  getWithDefault,
  computed: { readOnly },
  run: { next, cancel }
} = Ember;

export default Component.extend({
  classNames: ['material-toast', 'toast'],
  classNameBindings: ['active', 'exiting', 'color'],
  active: false,

  exiting: readOnly('content.exiting'),

  color: computed('content.type', function() {
    switch (this.get('content.type')) {
      case 'danger':
        return 'red darken-2 white-text';
      case 'warning':
        return 'yellow lighten-1 black-text';
      default: return '';
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    // add the 'active' class so the entry transition animation
    this._applyActiveClass = next(() => {
      this.set('active', true);
    });
  },

  willDestroyElement() {
    this._super();
    // Prevent memory leak
    this._destroyFlashMessage();
    if (this._applyActiveClass) {
      cancel(this._applyActiveClass);
    }
  },

  _destroyFlashMessage() {
    let flash = getWithDefault(this, 'content', false);
    if (flash) {
      flash.destroyMessage();
    }
  }
});
