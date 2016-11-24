var count = require('./index.js').count;
var assert = require('assert');

describe('count', function () {
  it('1 + 1 = 2', function () {
    var result = count(1, 1);
    var correctAns = 2;
    assert.equal(result, correctAns);
  });
});