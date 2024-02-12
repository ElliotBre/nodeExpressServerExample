
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["airbnb-base"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["prettier"],
  rules: {
    'prettier/prettier': [
        "error",
        {
          bracketSameLine: false,
          bracketSpacing: true,
          printWidth: 120,
          proseWrap: "always",
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: "none",
          useTabs: false
        }
      ]
    }
}
