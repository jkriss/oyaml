const tap = require('tap')
const { parts } = require('../index')

tap.same(parts(" a:b c:d | e:f thing:\"quoted | pipe\" | more stuff"), ["a:b c:d","e:f thing:\"quoted | pipe\"", "more stuff"], "only parse the elements of the top level array")