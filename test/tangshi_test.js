'use strict';

var tangshi = require('../lib/tangshi.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['tangshi'] = {
  setUp: function(done) {
    //var json = require('../json/tangshi.json');
    done();
  },
  'no args': function(test) {
    // tests here
    test.notEqual(tangshi.getPoetryByAuthor('李白'), 0, 'should not be 0.');
    test.notEqual(tangshi.getPoetryByTitle('静夜思'), 0, 'should not be 0.');
    test.notEqual(tangshi.getPoetryBySearchTitle('静夜思'), 0, 'should not be 0.');
    test.notEqual(tangshi.getPoetryBySearchContent('白日依山尽'), 0, 'should not be 0.');
    test.notEqual(tangshi.getPoetryByTitleAndAuthor('静夜思', '李白'), 0, 'should not be 0.');
    test.done();
  }
};
