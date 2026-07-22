{
  pkgs ? import <nixpkgs> { },
}:

with pkgs;
mkShell {
  name = "tree-sitter-autoconf";
  buildInputs = [
    tree-sitter
    bun
    cargo
    uv
  ];
}
