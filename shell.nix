{
  pkgs ? import <nixpkgs> { },
}:

with pkgs;
mkShell {
  name = "tree-sitter-config";
  buildInputs = [
    tree-sitter
    bun
    cargo
    uv
  ];
}
