require('./helpers.js');
const { expect } = require('chai');  // Ensure chai is required
const sinon = require('sinon');
const { writeCards, countDown } = require('../index.js'); // Import functions

describe('index.js', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  describe('writeCards()', () => {
    it('returns an array of thank-you messages for each name provided to the function', () => {
      expect(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")).to.deep.equal([
        "Thank you, Guadalupe, for the wonderful surprise gift!",
        "Thank you, Ollie, for the wonderful surprise gift!",
        "Thank you, Aki, for the wonderful surprise gift!"
      ]);
    });
  });

  describe('countDown()', () => {
    it('invokes console.log once for each number, counting down from the number provided to zero', () => {
      countDown(10);
      expect(spy.callCount, "Expected countDown(10) to invoke 11 console.logs").to.equal(11);
    });

    it('logs each number when counting down, starting from the number provided', () => {
      countDown(4);
      expect(spy.getCall(0).args[0]).to.equal(4);
      expect(spy.getCall(1).args[0]).to.equal(3);
      expect(spy.getCall(2).args[0]).to.equal(2);
      expect(spy.getCall(3).args[0]).to.equal(1);
      expect(spy.getCall(4).args[0]).to.equal(0);
    });
  });
});
