/// <reference types="tree-sitter-cli/dsl" />

/**
 * A structural grammar for Autoconf's M4 input. Shell is deliberately kept
 * opaque: it is emitted as `code` rather than parsed as Bash.
 */
module.exports = grammar({
  name: 'autoconf',

  extras: $ => [/\s/, /\\\r?\n/, $.comment, /\\( |\t|\v|\f)/],

  rules: {
    file: $ => optional($._statements),
    _statements: $ => repeat1($._statement),
    _statement: $ => choice(
      $.macro_call,
      $.bare_macro,
      $.m4_quoted,
      $.code,
      /\s+/,
    ),

    // `dnl` removes the rest of its input line before M4 expansion.
    comment: _ => token(prec(2, seq('dnl', /[^\n]*/))),

    macro_call: $ => prec(1, prec.right(seq(
      field('name', $.macro_name),
      '(',
      optional(field('arguments', $.argument_list)),
      ')',
    ))),

    // Keep the newline in this source-level form so it cannot compete with a
    // following `(`, which always belongs to `macro_call`.
    bare_macro: $ => seq(field('name', $.macro_name), choice('\n', $.comment)),

    argument_list: $ => repeat1(choice(
      $.m4_quoted,
      $.macro_call,
      alias($._argument_text, $.code),
      alias($._parenthesized_text, $.code),
      ',',
      '\n',
    )),

    _argument: $ => repeat1(choice(
      $.m4_quoted,
      $.macro_call,
      alias($._argument_text, $.code),
      alias($._parenthesized_text, $.code),
    )),

    // `[[...]]` is an opaque literal. A single M4 quote, `[...]`, remains
    // structural so that Autoconf calls nested inside it are still parsed.
    m4_quoted: $ => choice(
      prec(2, seq('[[', optional(alias($._double_quoted_text, $.code)), ']]')),
      seq('[', repeat(choice(
        $.m4_quoted,
        $.macro_call,
        alias($._quoted_text, $.code),
      )), ']'),
    ),

    macro_name: _ => prec(2, /AC_[A-Z0-9_]+|AS_[A-Z0-9_]+|AH_[A-Z0-9_]+|AM_[A-Z0-9_]+|LT_[A-Z0-9_]+|PKG_[A-Z0-9_]+|AX_[A-Z0-9_]+|zsh_[A-Z0-9_]+|m4_[A-Za-z0-9_]+|ifdef|ifndef|ifelse|undefine|include|sinclude|esyscmd|changequote|changecom/),

    code: _ => token(prec(-1, /[^\[\]\n]+/)),
    _quoted_text: _ => token(prec(-1, /[^\[\]\n]+/)),
    // This pattern stops immediately before the closing `]]` delimiter.
    _double_quoted_text: _ => token(prec(-1, /([^\]]|\][^\]])+/)),
    _argument_text: _ => token(prec(-1, /[^,()\[\]\n]+/)),
    _parenthesized_text: $ => seq(
      '(',
      repeat(choice(
        alias($._argument_text, $.code),
        $._parenthesized_text,
        $.m4_quoted,
        ','
      )),
      ')',
    ),
  },
});
