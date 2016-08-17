import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('details-card', 'Integration | Component | details card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{details-card}}`);

  assert.equal(
    this.$().text().trim().replace(/[\s\n]+/g, ''),
    ''
  );

  // Template block usage:
  this.render(hbs`
    {{#details-card}}
      template block text
    {{/details-card}}
  `);

  assert.equal(
    this.$().text().trim().replace(/[\s\n]+/g, ''),
    ''
  );
});
