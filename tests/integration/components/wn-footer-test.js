import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import textLines from 'wastenot/tests/helpers/text-lines';

moduleForComponent('wn-footer', 'Integration | Component | wn footer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{wn-footer}}`);

  let expectedLines = [
    'WASTENOT COMPOST',
    'Ravenswood, Chicago',
    '(773) 219-2995',
    'liam@wastenotcompost.com',
    '© 2016 Wastenot Compost   Website created by AlienCyborg'
  ];

  assert.deepEqual(textLines(this.$()), expectedLines);

  // Template block usage:
  this.render(hbs`
    {{#wn-footer}}
      template block text
    {{/wn-footer}}
  `);

  assert.deepEqual(textLines(this.$()), expectedLines);
});
