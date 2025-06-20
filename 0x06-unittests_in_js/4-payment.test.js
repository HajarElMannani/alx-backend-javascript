const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call calculateNumber and use sum', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWith('The total is: 10')).to.be.true;
    stub.restore();
    spy.restore();
  });
});
