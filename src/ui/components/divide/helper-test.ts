import divide from './helper';

const { module, test } = QUnit;

module('Helper: divide', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(divide([]), undefined);
  });
});
