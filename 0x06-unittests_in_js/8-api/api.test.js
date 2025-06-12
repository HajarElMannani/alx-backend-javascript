const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Test index page', function () {
  it('should be 200', function (done) {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('Should return Welcome to the payment system', function () {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
