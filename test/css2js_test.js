var grunt = require('grunt');

(function () {
    'use strict';

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

    exports['css2js'] = {
        setUp: function (done) {
            // setup here
            done();
        },
        'helper': function (test) {
            test.expect(0);
            // tests here
            //test.equal(grunt.helper('css2js'), 'css2!!!', 'should return the correct value.');
            test.done();
        }
    };

}());
