# tree-sitter-autoconf

[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/Freed-Wu/tree-sitter-autoconf/main.svg)](https://results.pre-commit.ci/latest/github/Freed-Wu/tree-sitter-autoconf/main)
[![github/workflow](https://github.com/Freed-Wu/tree-sitter-autoconf/actions/workflows/main.yml/badge.svg)](https://github.com/Freed-Wu/tree-sitter-autoconf/actions)
[![codecov](https://codecov.io/gh/Freed-Wu/tree-sitter-autoconf/branch/main/graph/badge.svg)](https://codecov.io/gh/Freed-Wu/tree-sitter-autoconf)
[![DeepSource](https://deepsource.io/gh/Freed-Wu/tree-sitter-autoconf.svg/?show_trend=true)](https://deepsource.io/gh/Freed-Wu/tree-sitter-autoconf)

[![github/downloads](https://shields.io/github/downloads/Freed-Wu/tree-sitter-autoconf/total)](https://github.com/Freed-Wu/tree-sitter-autoconf/releases)
[![github/downloads/latest](https://shields.io/github/downloads/Freed-Wu/tree-sitter-autoconf/latest/total)](https://github.com/Freed-Wu/tree-sitter-autoconf/releases/latest)
[![github/issues](https://shields.io/github/issues/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/issues)
[![github/issues-closed](https://shields.io/github/issues-closed/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/issues?q=is%3Aissue+is%3Aclosed)
[![github/issues-pr](https://shields.io/github/issues-pr/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/pulls)
[![github/issues-pr-closed](https://shields.io/github/issues-pr-closed/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/pulls?q=is%3Apr+is%3Aclosed)
[![github/discussions](https://shields.io/github/discussions/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/discussions)
[![github/milestones](https://shields.io/github/milestones/all/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/milestones)
[![github/forks](https://shields.io/github/forks/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/network/members)
[![github/stars](https://shields.io/github/stars/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/stargazers)
[![github/watchers](https://shields.io/github/watchers/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/watchers)
[![github/contributors](https://shields.io/github/contributors/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/graphs/contributors)
[![github/commit-activity](https://shields.io/github/commit-activity/w/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/graphs/commit-activity)
[![github/last-commit](https://shields.io/github/last-commit/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/commits)
[![github/release-date](https://shields.io/github/release-date/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/releases/latest)

[![github/license](https://shields.io/github/license/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf/blob/main/LICENSE)
[![github/languages](https://shields.io/github/languages/count/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf)
[![github/languages/top](https://shields.io/github/languages/top/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf)
[![github/directory-file-count](https://shields.io/github/directory-file-count/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf)
[![github/code-size](https://shields.io/github/languages/code-size/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf)
[![github/repo-size](https://shields.io/github/repo-size/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf)
[![github/v](https://shields.io/github/v/release/Freed-Wu/tree-sitter-autoconf)](https://github.com/Freed-Wu/tree-sitter-autoconf)

[![pypi/status](https://shields.io/pypi/status/tree-sitter-autoconf)](https://pypi.org/project/tree-sitter-autoconf/#description)
[![pypi/v](https://shields.io/pypi/v/tree-sitter-autoconf)](https://pypi.org/project/tree-sitter-autoconf/#history)
[![pypi/downloads](https://shields.io/pypi/dd/tree-sitter-autoconf)](https://pypi.org/project/tree-sitter-autoconf/#files)
[![pypi/format](https://shields.io/pypi/format/tree-sitter-autoconf)](https://pypi.org/project/tree-sitter-autoconf/#files)
[![pypi/implementation](https://shields.io/pypi/implementation/tree-sitter-autoconf)](https://pypi.org/project/tree-sitter-autoconf/#files)
[![pypi/pyversions](https://shields.io/pypi/pyversions/tree-sitter-autoconf)](https://pypi.org/project/tree-sitter-autoconf/#files)

[![npm](https://img.shields.io/npm/dw/tree-sitter-autoconf)](https://www.npmjs.com/package/tree-sitter-autoconf)

[![Crates.io (recent)](https://img.shields.io/crates/dr/tree-sitter-autoconf)](https://crates.io/crates/tree-sitter-autoconf)

[![luarocks](https://img.shields.io/luarocks/v/Freed-Wu/tree-sitter-autoconf)](https://luarocks.org/modules/Freed-Wu/tree-sitter-autoconf)

configure.ac grammar for
[tree-sitter](https://github.com/tree-sitter/tree-sitter).

Created for [autotools-language-server](https://github.com/Freed-Wu/autotools-language-server).

## Usage

### [rocks.nvim](https://github.com/lumen-oss/rocks.nvim)

```toml
[treesitter]
auto_highlight = "all"

[treesitter.parser_map]
config = "autoconf"

[plugins]
"rocks-treesitter.nvim" = "VERSION"
tree-sitter-autoconf = "VERSION"
```

### [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

Use branch [main](https://github.com/Freed-Wu/tree-sitter-autoconf/tree/main).
