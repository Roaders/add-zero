'use strict';

var addZero = require('./');
var test = require('tape');

test('add zero', function(t) {
  t.deepEqual(addZero(5), '05', 'default decimal places should be 2');
  t.deepEqual(addZero(10), '10', 'only add zero if not enough decimal places');
  t.deepEqual(addZero(5, 3), '005', 'test 3 decimal places');
  t.end();
});
