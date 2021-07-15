const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".tsx", ".ts", ".js", ".json"],
      },
      typescript: {},
    },
  },
  rules: {
    "prettier/prettier": [WARN, { endOfLine: "auto" }],
    "@typescript-eslint/no-var-requires": OFF,
    "@typescript-eslint/no-unused-vars": OFF,
  },
}
