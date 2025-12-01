{
  mkShell,
  alejandra,
  bash,
  nodejs,
  pnpm,
}:
mkShell rec {
  name = "advent-of-code-2025";

  packages = [
    bash
    nodejs
    pnpm

    # Required for CI for format checking.
    alejandra
  ];
}
