/**
 * Expose foreach
 */

module.exports = foreach['default'] = foreach

/**
 * For each
 * @param  {Function} fn  iterator
 * @param  {Object}   obj object to iterate over
 * @param  {Object}   ctx
 */

function foreach (fn, obj, ctx) {
  if (!obj) return

  var keys = Object.keys(obj)

  for (var i = 0, len = keys.length; i < len; ++i) {
    var key = keys[i]
    fn.call(ctx, obj[key], key)
  }
}
