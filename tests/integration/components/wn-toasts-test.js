import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wn-toasts', 'Integration | Component | wn toasts', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{wn-toasts}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#wn-toasts}}
      template block text
    {{/wn-toasts}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
