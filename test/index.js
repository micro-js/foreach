/**
 * Imports
 */

var foreach = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should iterate over object', function (t) {
  var obj = {1: 1, 2: 2, 3: 3}
  var clone = {}

  foreach(function (val, key) {
    clone[key] = val
  }, obj)

  t.deepEqual(obj, clone)
  t.end()
})
