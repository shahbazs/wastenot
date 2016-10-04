import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import textLines from 'wastenot/tests/helpers/text-lines';

moduleForComponent('wn-navbar', 'Integration | Component | wn navbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{wn-navbar}}`);

  let expectedLines = [
    'WasteNot',
    'Home',
    'About',
    'Services',
    'Sign Up',
    'menu',
    'Home',
    'About',
    'Services',
    'Sign Up'
  ];

  assert.deepEqual(textLines(this.$()), expectedLines);

  // Template block usage:
  this.render(hbs`
    {{#wn-navbar}}
      template block text
    {{/wn-navbar}}
  `);

  assert.deepEqual(textLines(this.$()), expectedLines);
});
