const stringify = function(obj, parentIsObject) {
  // console.log("stringifying", obj)
  let str = ""
  const type = typeof obj
  if (Array.isArray(obj)) {
    if (parentIsObject) {
      return `[${obj.map(o => stringify(o)).join(", ")}]`
    } else {
      return obj.map(o => stringify(o)).join(" | ")
    }
  } else if (type === 'number' || type === 'boolean' || obj === null || type === 'undefined') {
    return obj
  } else if (type === 'string') {
    if (obj.length === 0) return '""'
    return obj.match(/[ ":,\[\]\t\n\r]/) ? JSON.stringify(obj) : obj
  } else if (type === 'object') {
    let parts = []
    Object.keys(obj).forEach(k => {
      const newKey = stringify(k)
      const newValue = stringify(obj[k], true)
      parts.push(`${newKey}:${newValue}`)
    })
    str += parts.join(" ")
    if (parentIsObject) str = `{${str}}`
    return str
  } else {
    console.error("didn't stringify", type)
  }
}

module.exports = stringify