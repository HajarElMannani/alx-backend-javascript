const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('should sum two numbers', function () {
  it('should round 1 and 3 and sum', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should round 1 and 3.7 and sum', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should round 1.0 and 4.0 and sum', function () {
    assert.strictEqual(calculateNumber(1.0, 4.0), 5);
  });
  it('should round 1.2 and 3.7 and sum', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should round 1.5 and 3.7 and sum', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should round 1.55555555 and 3.777777777 and sum', function () {
    assert.strictEqual(calculateNumber(1.555555555, 3.77777777), 6);
  });  
});
