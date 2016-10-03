import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import textLines from 'wastenot/tests/helpers/text-lines';

moduleForComponent('login-card', 'Integration | Component | login card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{login-card}}`);

  let expectedLines = [
    'Login to WasteNot Compost',
    'Username',
    'Password',
    'Login'
  ];

  assert.deepEqual(textLines(this.$()), expectedLines);

  // Template block usage:
  this.render(hbs`
    {{#login-card}}
      template block text
    {{/login-card}}
  `);

  assert.deepEqual(textLines(this.$()), expectedLines);
});
