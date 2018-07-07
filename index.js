const { parse } = require('./parse')
const stringify = require('./stringify')

const topLevelParse = function(str) {
  const result = parse(str)
  if (Array.isArray(result) && result.length === 1) return result[0]
  else return result
}

module.exports = {
  parse: topLevelParse,
  stringify
}