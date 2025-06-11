const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('should sum two numbers', function () {
  it('should round 1 and 3 and sum', function () {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should round 1 and 3.7 and sum', function () {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('should round 1.0 and 4.0 and sum', function () {
    expect(calculateNumber('SUM', 1.0, 4.0)).to.equal(5);
  });
  it('should round 1.2 and 3.7 and sum', function () {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  it('should round 1.5 and 3.7 and sum', function () {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should round 1.55555555 and 3.777777777 and sum', function () {
    expect(calculateNumber('SUM', 1.555555555, 3.77777777)).to.equal(6);
  });
});

describe('should subtract two numbers', function () {
  it('should round 1 and 3 and sub', function () {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('should round 1 and 3.7 and sub', function () {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  });
  it('should round 1.0 and 4.0 and sub', function () {
    expect(calculateNumber('SUBTRACT', 1.0, 4.0)).to.equal(-3);
  });
  it('should round 1.2 and 3.7 and sub', function () {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });
  it('should round 1.5 and 3.7 and sub', function () {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });
  it('should round 1.55555555 and 3.777777777 and sub', function () {
    expect(calculateNumber('SUBTRACT', 1.555555555, 3.77777777)).to.equal(-2);
  });
});

describe('should div two numbers', function () {
  it('should round 1 and 3 and div', function () {
    expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
  });
  it('should round 1 and 3.7 and div', function () {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });
  it('should round 1.0 and 4.0 and div', function () {
    expect(calculateNumber('DIVIDE', 1.0, 4.0)).to.equal(0.25);
  });
  it('should round 1.2 and 3.7 and div', function () {
    expect(calculateNumber('DIVIDE', 1.2, 0)).to.equal('Error');
  });
  it('should round 1.5 and 3.7 and div', function () {
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });
  it('should round 1.55555555 and 3.777777777 and div', function () {
    expect(calculateNumber('DIVIDE', 1.555555555, 3.77777777)).to.equal(0.5);
  });
});
