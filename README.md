# OYAML: One-line YAML

OYAML is a YAML-like notation syntax for objects with very flexible whitespace. It's relatively human-readable and human-writable, while being compatible with a one-line-per-record data format, much like [JSON Lines](http://jsonlines.org/).

## Installation

    npm install oyaml

## Usage

```javascript
    const { parse, stringify } = require('oyaml')

    const str = 'message:hi "longer message":"Hello there!" number:4.3 list:[a, b, thing:stuff]'
    const obj = parse(str)
    /** 
    {
      "message": "hi",
      "longer message": "Hello there!",
      "number": 4.3,
      "list": [
        "a",
        "b",
        {
          "thing": "stuff"
        }
      ]
    }
    **/

    const oyaml = stringify(obj)
    // message:hi "longer message":"Hello there!" number:4.3 list:[a, b, thing:stuff]
```