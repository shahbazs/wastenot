import { keyValues } from 'wastenot/helpers/key-values';
import { module, test } from 'qunit';

module('Unit | Helper | key values');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = keyValues([{ foo: 'bar' }]);
  assert.equal(result, 'foo: bar');
});
