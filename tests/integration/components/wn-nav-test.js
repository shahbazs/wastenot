import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wn-nav', 'Integration | Component | wn nav', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // this.render(hbs`{{wn-nav}}`);

  // assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#wn-nav}}
      template block text
    {{/wn-nav}}
  `);

  assert.equal(
    this.$().text().trim().replace(/[\s\n]+/g, ''),
    'menutemplateblocktext'
  );
});
