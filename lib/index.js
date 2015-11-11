/**
 * forEach
 */

function forEach (obj, fn, ctx) {
  if (!obj) return

  var keys = Object.keys(obj)

  for (var i = 0, len = keys.length; i < len; ++i) {
    var key = keys[i]
    fn.call(ctx, obj[key], key)
  }
}

/**
 * Exports
 */

module.exports = forEach
