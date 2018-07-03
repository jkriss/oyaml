const split = require('split-string')
const isNumber = require('is-number')

const parseKeyValue = function(entry, map) {
  const firstColon = entry.indexOf(':')
  const subparts = [entry.slice(0,firstColon) , entry.slice(firstColon+1)]
  let value = isNumber(subparts[1]) ? parseFloat(subparts[1]) : subparts[1]
  if (value[0] == '[') {
    let values = []
    // parse the list
    value.slice(1,value.length-1).split(',')
      .map(p => split(p, { separator: ' ' }))
      .forEach(stack => {
        const subMap = {}
        stack.forEach(e => {
          console.log("parsing list entry", entry)
          parseKeyValue(e, subMap)
        })
        values.push(subMap)  
      })
    value = values
  }
  map[subparts[0]] = value
}

const parse = function(originalMessage) {
  const parts = split(originalMessage, { separator: ' ', brackets: true })
  let m = {}
  parts.forEach(entry => {
    parseKeyValue(entry, m)
  })
  return m  
}

module.exports = {
  parse
}