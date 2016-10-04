import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import textLines from 'wastenot/tests/helpers/text-lines';

moduleForComponent('register-card', 'Integration | Component | register card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{register-card}}`);

  this.render(hbs`{{wn-footer}}`);

  let expectedLines = [
    'Sign Up for More Info',
    'First Name',
    'Last Name',
    'Email Address',
    'What is your Service Type?',
    'Residential',
    'Commercial',
    'SUBMIT',
    'GET COMPOSTING ASAP'
  ];

  // Template block usage:
  this.render(hbs`
    {{#register-card}}
      template block text
    {{/register-card}}
  `);

  assert.deepEqual(textLines(this.$()), expectedLines);
});
