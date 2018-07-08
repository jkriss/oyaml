const { parse } = require('./parse')
const parts = require('./parts')
const stringify = require('./stringify')
const stripAnsi = require('strip-ansi')
const { unflatten } = require('flat')

const topLevelParse = function(str, opts={}) {
  let result = parse(stripAnsi(str))
  if (opts.unflatten !== false) result = result.map(unflatten)
  if (!opts.array && Array.isArray(result) && result.length === 1) return result[0]
  else return result
}

module.exports = {
  parse: topLevelParse,
  parts: parts.parse,
  stringify
}