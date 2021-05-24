import multiple from './helper';

const { module, test } = QUnit;

module('Helper: multiple', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(multiple([]), undefined);
  });
});
