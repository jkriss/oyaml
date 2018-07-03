const stringify = function(obj) {
  // console.log("stringifying", obj)
  let str = ""
  const type = typeof obj
  if (Array.isArray(obj)) {
    return `[${obj.map(stringify).join(", ")}]`
  } else if (type === 'object') {
    let parts = []
    Object.keys(obj).forEach(k => {
      const newKey = stringify(k)
      const newValue = stringify(obj[k])
      parts.push(`${newKey}:${newValue}`)
    })
    str += parts.join(" ")
    return str
  } else if (type === 'number') {
    return obj
  } else if (type === 'string') {
    if (obj.length === 0) return '""'
    return obj.split("").filter(c => c.match(/[a-z0-9_.-]/i)).length === obj.length ? obj : JSON.stringify(obj)
  } else {
    console.error("didn't stringify", type)
  }
}

module.exports = stringify