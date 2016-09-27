import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('li-link', 'Integration | Component | li link', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{li-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template with text:
  this.render(hbs`
    {{li-link text='hello'}}
  `);

  assert.equal(this.$().text().trim(), 'hello');
});
