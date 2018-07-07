const tap = require('tap')
const { stringify } = require('../index')

tap.same(stringify({ fruit: "apple" }), "fruit:apple" , "simple unquoted key/value")
tap.same(stringify({ fruit: "Fuji apple" }), 'fruit:"Fuji apple"', "quoted value with spaces")
tap.same(stringify({ "fave fruit": "Fuji apple" }), '"fave fruit":"Fuji apple"', "quoted key with spaces")
tap.same(stringify({ a:"one", b:"two" }), 'a:one b:two', "multiple items")
tap.same(stringify({ a:1 }), 'a:1', "correct number parsing")
tap.same(stringify({ list: [{a:1, b:2}, {a:3, b:4}] }), 'list:[a:1 b:2, a:3 b:4]', "lists")
tap.same(stringify({ list: [{a:1, b:2}, {list:[{a:3, b:4}, {a:5, b:6}]}] }), 'list:[a:1 b:2, list:[a:3 b:4, a:5 b:6]]', "nested lists")
tap.same(stringify({ pi: 3.14 }), 'pi:3.14', "allow floats")
tap.same(stringify({ slug: 'some-title_with-dashes' }), 'slug:some-title_with-dashes', "allow dashes and underscore in unquoted string")
tap.same(stringify({ date: '2018-01-01' }), 'date:2018-01-01', "parse date as string")
tap.same(stringify({ str:"" }), 'str:""', "handle empty string")
tap.same(stringify({ list: ["a", "b"] }), 'list:[a, b]', "literal lists")
tap.same(stringify(["a", "b"]), 'a | b', "plain array")
tap.same(stringify('a'), "a", "single literal")
tap.same(stringify({a:true, b:false}), 'a:true b:false', "booleans")
tap.same(stringify({a:null}), 'a:null', "null")
tap.same(stringify({ path:"/thing?val=what%20&other=what#thung" }), 'path:/thing?val=what%20&other=what#thung', "lenient strings")
tap.same(stringify({ subobject: { a: 'b', c: 'd' }}), 'subobject:{a:b c:d}', "subobjects with curly braces")
tap.same(stringify([ 'list', 'of', 'things']), 'list | of | things', "allow uncontained pipe-delimited arrays")