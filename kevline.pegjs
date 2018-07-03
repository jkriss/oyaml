line
  = ws? obj:entries ws? { return obj }
  
entries
  = members:(
      head:entry
      tail:(ws m:entry { return m; })*
      {
        var result = {};
        [head].concat(tail).forEach(function(element) {
          result[element.name] = element.value;
        });

        return result;
      }
    )?
    { return members !== null ? members: {}; }

  
entry
  = key:identifier ":" value:value { return { name:key, value:value } }
  
identifier
  = chars:[a-zA-Z0-9]+ { return chars.join("") }

value
  = array
  / number
  / string

value_or_entries
  = entries
  / value
  
array
  = begin_array
    values:(
      head:value_or_entries
      //head: value
      tail:(value_separator v:value_or_entries { return v; })*
      { return [head].concat(tail); }
    )?
    end_array
    { return values !== null ? values : []; }
    
begin_array     = ws "[" ws
end_array       = ws "]" ws
value_separator = ws "," ws
  
number
  = digits:digit+ { return parseFloat(digits.join("")) }

digit
  = [0-9]
  
string
  = quoted_string
  / chars:[a-z0-9]i+ { return chars.join("") }
  
quoted_string
  = quotation_mark chars:char* quotation_mark { return chars.join(""); }
  
unescaped
  = [^\0-\x1F\x22\x5C]

char
  = unescaped
  / escape
    sequence:(
        '"'
      / "\\"
      / "/"
      / "b" { return "\b"; }
      / "f" { return "\f"; }
      / "n" { return "\n"; }
      / "r" { return "\r"; }
      / "t" { return "\t"; }
      / "u" digits:$(HEXDIG HEXDIG HEXDIG HEXDIG) {
          return String.fromCharCode(parseInt(digits, 16));
        }
    )
    { return sequence; }
    
escape
  = "\\"
  
quotation_mark
  = "\""

ws "whitespace"
  = [ \t]*
  
HEXDIG = [0-9a-f]i
              