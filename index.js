const { parse } = require('./parse')
const parts = require('./parts')
const stringify = require('./stringify')
const stripAnsi = require('strip-ansi')

const topLevelParse = function(str) {
  const result = parse(stripAnsi(str))
  if (Array.isArray(result) && result.length === 1) return result[0]
  else return result
}

module.exports = {
  parse: topLevelParse,
  parts: parts.parse,
  stringify
}