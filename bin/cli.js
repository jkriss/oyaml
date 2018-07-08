#!/usr/bin/env node

const fs = require('fs')
const oyaml = require('../index')

const cmd = process.argv.slice(2)[0] || 'stringify'

let data = fs.readFileSync("/dev/stdin", "utf-8")
if (cmd === 'stringify') data = JSON.parse(data)

const result = oyaml[cmd](data)
console.log(typeof result === 'string' ? result : JSON.stringify(result))