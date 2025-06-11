const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('should sum two numbers', function () {
  it('should round 1 and 3 and sum', function () {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it('should round 1 and 3.7 and sum', function () {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('should round 1.0 and 4.0 and sum', function () {
    assert.equal(calculateNumber('SUM', 1.0, 4.0), 5);
  });
  it('should round 1.2 and 3.7 and sum', function () {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  it('should round 1.5 and 3.7 and sum', function () {
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should round 1.55555555 and 3.777777777 and sum', function () {
    assert.equal(calculateNumber('SUM', 1.555555555, 3.77777777), 6);
  });
});

describe('should subtract two numbers', function () {
  it('should round 1 and 3 and sub', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('should round 1 and 3.7 and sub', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
  });
  it('should round 1.0 and 4.0 and sub', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 4.0), -3);
  });
  it('should round 1.2 and 3.7 and sub', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });
  it('should round 1.5 and 3.7 and sub', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  it('should round 1.55555555 and 3.777777777 and sub', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.555555555, 3.77777777), -2);
  });
});

describe('should div two numbers', function () {
  it('should round 1 and 3 and div', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 4), 0.25);
  });
  it('should round 1 and 3.7 and div', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
  });
  it('should round 1.0 and 4.0 and div', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.0, 4.0), 0.25);
  });
  it('should round 1.2 and 3.7 and div', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 0), 'Error');
  });
  it('should round 1.5 and 3.7 and div', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  });
  it('should round 1.55555555 and 3.777777777 and div', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.555555555, 3.77777777), 0.5);
  });
});

