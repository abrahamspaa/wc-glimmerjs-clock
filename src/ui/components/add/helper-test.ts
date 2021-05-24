import add from './helper';

const { module, test } = QUnit;

module('Helper: add', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(add([]), undefined);
  });
});
