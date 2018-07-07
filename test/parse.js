const tap = require('tap')
const { parse } = require('../index')

tap.same(parse("fruit:apple"), { fruit: "apple" }, "simple unquoted key/value")
tap.same(parse('fruit:"Fuji apple"'), { fruit: "Fuji apple" }, "quoted value with spaces")
tap.same(parse('"fave fruit":"Fuji apple"'), { "fave fruit": "Fuji apple" }, "quoted key with spaces")
tap.same(parse('a:one b:two'), { a:"one", b:"two" }, "multiple items")
tap.same(parse('a:1'), { a:1 }, "correct number parsing")
tap.same(parse('list:[a:1 b:2, a:3 b:4]'), { list: [{a:1, b:2}, {a:3, b:4}] }, "lists")
tap.same(parse('list:[a:1 b:2, list:[a:3 b:4, a:5 b:6]]'), { list: [{a:1, b:2}, {list:[{a:3, b:4}, {a:5, b:6}]}] }, "nested lists")
tap.same(parse('pi:3.14'), { pi: 3.14 }, "allow floats")
tap.same(parse('slug:some-title_with-dashes'), { slug: 'some-title_with-dashes' }, "allow dashes and underscore in unquoted string")
tap.same(parse('date:2018-01-01'), { date: '2018-01-01' }, "parse date as string")
tap.same(parse('str:""'), { str:"" }, "handle empty strings")
tap.same(parse('list:[a, b]'), { list: ["a", "b"] }, "literal lists")
tap.same(parse('[a, b]'), ["a", "b"], "plain array")
tap.same(parse('a, b'), ["a", "b"], "plain array no brackets (top level)")
tap.same(parse('a'), "a", "single literal")
tap.same(parse('  a '), "a", "leading and trailing whitespace is ok")
tap.same(parse('a:true b:false'), {a: true, b: false}, "booleans")
tap.same(parse('a:null'), {a: null}, "null")
tap.same(parse('path:/thing?val=what%20&other=what#thung'), { path:"/thing?val=what%20&other=what#thung" }, "lenient strings")
tap.same(parse('subobject:{ a:b c:d }'), { subobject: { a: 'b', c: 'd' } }, "subobjects with curly braces")
tap.same(parse('list | of | things'), [ 'list', 'of', 'things'], "allow uncontained pipe-delimited arrays")
tap.same(parse(`hi:there
more:"stuff with spaces"
list:[
  \ta,
  thing:a 
  what:2
  list: [a, b, foo:2.5]
]`),
{
  "hi": "there",
  "more": "stuff with spaces",
  "list": [
     "a",
     {
        "thing": "a",
        "what": 2,
        "list": [
           "a",
           "b",
           {
              "foo": 2.5
           }
        ]
     }
  ]
}, "allow newlines and tabs")