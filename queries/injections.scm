((comment) @injection.content
  (#set! injection.language "comment"))

((file
  (code) @injection.content)
  (#set! injection.language "bash"))

(macro_call
  name: (macro_name) @_name
  arguments: (argument_list
    (m4_quoted
      (code) @injection.content))
  (#match? @_name "^AC_LANG_")
  (#set! injection.language "c"))

(macro_call
  name: (macro_name) @_name
  arguments: (argument_list
    (code) @injection.content)
  (#any-of? @_name "AC_TRY_COMMAND")
  (#set! injection.language "bash"))

(macro_call
  name: (macro_name) @_name
  arguments: (argument_list
    (m4_quoted
      (code) @injection.content))
  (#any-of? @_name "AC_TRY_COMMAND")
  (#set! injection.language "bash"))

(macro_call
  name: (macro_name) @_name
  arguments: (argument_list
    (_)
    (_)
    (code) @injection.content)
  (#any-of? @_name "AC_ARG_ENABLE" "AC_ARG_WITH")
  (#set! injection.language "bash"))

(macro_call
  name: (macro_name) @_name
  arguments: (argument_list
    (_)
    (_)
    (m4_quoted
      (code) @injection.content))
  (#any-of? @_name "AC_ARG_ENABLE" "AC_ARG_WITH")
  (#set! injection.language "bash"))

(macro_call
  name: (macro_name) @_name
  arguments: (argument_list
    (_)
    (code) @injection.content)
  (#match? @_name "^AC_.*_IFELSE$|^AC_CHECK_")
  (#set! injection.language "bash"))

(macro_call
  name: (macro_name) @_name
  arguments: (argument_list
    (_)
    (m4_quoted
      (code) @injection.content))
  (#match? @_name "^AC_.*_IFELSE$|^AC_CHECK_")
  (#set! injection.language "bash"))
