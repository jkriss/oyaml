line_with_whitespace
  = ws line:line ws { return line }
  
line
  = entries
  / array
  / value
  
entries
  = begin_object?
    members:(
      head:entry
      tail:(ws m:entry { return m; })*
      {
        var result = {};
        [head].concat(tail).forEach(function(element) {
          result[element.name] = element.value;
        });

        return result;
      }
    )+
    end_object?
    { return members[0]; }

begin_object     = ws "{" ws
end_object       = ws "}" ws

entry
  = key:identifier key_value_separator value:value_or_entries { return { name:key, value:value } }

key_value_separator
  = ws ":" ws
  
identifier
 = string

value
  = array
  / boolean
  / null
  / string

value_or_entries
  = entries
  / value
  
null
 = "null" { return null }
  
boolean
  = "true" { return true }
  / "false" { return false }
  
array
  = begin_array
    values:(
      head:value_or_entries
      tail:(value_separator v:value_or_entries { return v; })*
      { return [head].concat(tail); }
    )?
    end_array
    { return values !== null ? values : []; }
    
begin_array     = ws "[" ws
end_array       = ws "]" ws
value_separator = ws "," ws
  
string
  = quoted_string
  / unquoted_string

unquoted_string
 = chars:[^ ":,\[\]{}\t\n\r]i+ { 
    const val = chars.join("")
    const float = parseFloat(val)
 	if (!isNaN(float) && JSON.stringify(float) === val) return float
    else return val
   }
 
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
  = [ \t\n\r]*
  
HEXDIG = [0-9a-f]i