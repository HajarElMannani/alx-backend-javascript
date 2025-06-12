const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Test for index page', function () {
  it('should be 200', function (done) {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('Should return Welcome to the payment system', function (done) {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Test for cart page', function () {
  it('should be 200', function (done) {
    request.get('http://localhost:7865/cart/10', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
  it('Should return 404 when type is not number', function (done) {
    request.get('http://localhost:7865/cart/flower', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
