import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import textLines from 'wastenot/tests/helpers/text-lines';

moduleForComponent('details-card', 'Integration | Component | details card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{details-card}}`);

  let expectedLines = [
    'Resident Details',
    'Phone',
    'House number',
    'Street',
    'Apt/Suite',
    'City',
    'State',
    'Zip',
    'Type of Residence',
    'Payment Method',
    'Cash',
    'Check',
    'SUBMIT'
  ];

  assert.deepEqual(textLines(this.$()), expectedLines);

  // Template block usage:
  this.render(hbs`
    {{#details-card}}
      template block text
    {{/details-card}}
  `);

  assert.deepEqual(textLines(this.$()), expectedLines);
});
