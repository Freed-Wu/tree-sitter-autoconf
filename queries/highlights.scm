(macro_call
  name: (macro_name) @function.macro)

(bare_macro
  name: (macro_name) @constant.macro)

(comment) @comment

(comment
  (body) @spell)

(code) @string

"," @punctuation.delimiter

[
  "[["
  "]]"
  "["
  "]"
  "("
  ")"
] @punctuation.bracket
