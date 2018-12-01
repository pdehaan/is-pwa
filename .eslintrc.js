module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  root: true,
  rules: {
    "eqeqeq": "error",
    "no-console": "warn",
    "no-var": "error",
    "one-var": ["error", "never"],
    "prefer-const": "error",
    "quotes": ["error", "double"]
  }
};
