import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('nps-bar-section', 'Integration | Component | nps bar section', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nps-bar-section}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#nps-bar-section}}
      template block text
    {{/nps-bar-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
