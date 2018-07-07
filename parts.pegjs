line_with_whitespace
  = ws line:line ws { return line }
  
line
  = top_level_array

unquoted_chars
  = chars:[^|"\t\n\r]i+ { 
    return chars.join("")
  }
  
not_pipe
  = $quoted_string
  / unquoted_chars


top_level_array
  = values:(
      head:not_pipe+
      tail:(value_separator v:not_pipe+ { return v.join("").trim(); })*
      { return [head.join("").trim()].concat(tail); }
    )?
    { return values !== null ? values : []; }

begin_array     = ws [[] ws
end_array       = ws [\]] ws
value_separator = ws [,|] ws
  
unquoted_string
 = chars:[^ |()":,\[\]{}\t\n\r]i+ { 
    return chars.join("")
   }
 
quoted_string
  = quotation_mark chars:char* quotation_mark
  
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