const tap = require('tap')
const { parse } = require('../index')

tap.same(parse("fruit:apple"), { fruit: "apple" }, "simple unquoted key/value")
tap.same(parse('fruit:"Fuji apple"'), { fruit: "Fuji apple" }, "quoted value with spaces")
tap.same(parse('a:one b:two'), { a:"one", b:"two" }, "multiple items")
tap.same(parse('a:1'), { a:1 }, "correct number parsing")
tap.same(parse('list:[a:1 b:2, a:3 b:4]'), { list: [{a:1, b:2}, {a:3, b:4}] }, "lists")
// tap.same(parse('list:[a:1 b:2, list:[a:3 b:4, a:5 b:6]]'), { list: [{a:1, b:2}, {list:[{a:3, b:4}, {a:5, b:6}]}] }, "nested lists")