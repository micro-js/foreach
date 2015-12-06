/**
 * Expose foreach
 */

module.exports = foreach['default'] = foreach

/**
 * For each
 * @param  {Function} fn  iterator
 * @param  {Object}   obj object to iterate over
 */

function foreach (fn, obj) {
  if (!obj) return

  var self = this
  var keys = Object.keys(obj)

  for (var i = 0, len = keys.length; i < len; ++i) {
    var key = keys[i]
    fn.call(self, obj[key], key)
  }
}
