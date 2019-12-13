module.exports = {
    "extends": [
      "eslint:recommended",
      "prettier",
      "plugin:jest/recommended"
    ],
    "parser": "babel-eslint",
    "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "jest/globals": true,
    },
    "plugins": [
      "babel",
      "prettier",
      "react",
      "jest"    
    ],
    "globals": {
        "expect": true,
        "browser": true,
        "global": true
      },
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "ecmaFeatures": {
          "modules": true,
          "impliedStrict": true,
          "jsx": true
      }
    },
    "rules": {
      "arrow-body-style": [2, "as-needed"],
      "arrow-parens": ["error", "as-needed"],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "brace-style": [2, "1tbs", { "allowSingleLine": true }],
      "camelcase": 2,
      "comma-style": 2,
      "constructor-super": 2,
      "curly": [2, "multi-line"],
      "dot-notation": [2, { "allowPattern": "^[a-z]+(_[a-z]+)+$" }],
      "eqeqeq": 2,
      "func-style": [2, "declaration", { "allowArrowFunctions": true }],
      "guard-for-in": 0,
      "handle-callback-err": [2, "^(err|error)$"],
      "indent": [2, 4],
      "jsx-quotes": [2, "prefer-double"],
      "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
      "lines-around-comment": 2,
      "new-cap": 2,
      "new-parens": 2,
      "no-alert": 2,
      "no-array-constructor": 2,
      "no-caller": 2,
      "no-cond-assign": 2,
      "no-const-assign": 2,
      "no-delete-var": 2,
      "no-dupe-class-members": 2,
      "no-dupe-keys": 2,
      "no-duplicate-imports": 2,
      "no-else-return": 2,
      "no-empty-pattern": 2,
      "no-empty": 2,
      "no-extra-parens": 0,
      "no-iterator": 2,
      "no-lonely-if": 2,
      "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
      "no-multi-str": 2,
      "no-multiple-empty-lines": [2, { "max": 2 }],
      "no-new-wrappers": 2,
      "no-proto": 2,
      "no-redeclare": 2,
      "no-shadow-restricted-names": 2,
      "no-shadow": 0,
      "no-spaced-func": 2,
      "no-this-before-super": 2,
      "no-trailing-spaces": [2, { "ignoreComments": true, "skipBlankLines": true }],
      "no-undef-init": 2,
      "no-unneeded-ternary": 2,
      "no-unused-vars": [2, { "args": "none", "varsIgnorePattern": "^h$" }],
      "no-useless-call": 2,
      "no-useless-computed-key": 2,
      "no-useless-concat": 2,
      "no-useless-constructor": 2,
      "no-useless-escape": 2,
      "no-useless-rename": 2,
      "no-var": 2,
      "no-with": 2,
      "object-curly-spacing": [2, "always"],
      "object-shorthand": 2,
      "prefer-arrow-callback": 2,
      "prefer-rest-params": 2,
      "prefer-spread": 2,
      "prefer-template": 0,			// we can enable this when they add an option to allow concat for complex variables
      "quote-props": [2, "as-needed"],
      "quotes": [2, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
      "radix": 2,
      "rest-spread-spacing": 2,
      "space-before-function-paren": [0, "always"],		// for fmt
      "space-in-parens": [0, "never"],
      "strict": [2, "never"],
      "unicode-bom": 2,
      "no-eval": 2,
      "no-implied-eval": 2,
      "no-new-func": 2,
      "comma-dangle": 0,
      "import/prefer-default-export": 0,
      "semi": 2,
      "keyword-spacing": 2,
      "require-atomic-updates": 0,
      "no-console": ["error", { "allow": ["warn", "error"] }],
      "react/jsx-boolean-value": [2, "never"],
      "react/jsx-closing-bracket-location": 2,
      "react/jsx-curly-spacing": 2,
      "react/display-name": [2, { "ignoreTranspilerName": false }],
      "react/jsx-equals-spacing": 2,
      "react/jsx-indent-props": [2, "tab"],
      "react/jsx-max-props-per-line": [2, { "maximum": 6 }],
      "react/jsx-no-bind": [2, { "ignoreRefs": true }],
      "react/jsx-no-comment-textnodes": 2,
      "react/jsx-no-duplicate-props": 2,
      "react/jsx-no-target-blank": 2,		// avoids security vuln, see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
      "react/jsx-no-undef": 2,
      "react/jsx-pascal-case": 2,
      "react/jsx-tag-spacing": [2, { "beforeSelfClosing": "always" }],
      "react/jsx-uses-react": 2,
      "react/jsx-uses-vars": 2,
      "react/jsx-wrap-multilines": 2,
      "react/no-danger": 2,
      "react/no-did-mount-set-state": 2,
      "react/no-did-update-set-state": 2,
      "react/no-find-dom-node": 2,
      "react/no-is-mounted": 2,
      "react/no-string-refs": 0, // disabled for now because it does not work with linkref
      "react/prefer-es6-class": 2,
      "react/prefer-stateless-function": 1,
      "react/require-render-return": 2,
      "react/self-closing-comp": 2,
      "react/sort-comp": [2, {
          "order": [
              "properties",
              "static-methods",
              "everything-else",
              "lifecycle",
              "rendering"
          ],
          "groups": {
              "properties": [
                  "state"
              ],
              "rendering": [
                  "/^render.+$/",
                  "render"
              ]
          }
  
      }]
    },
    "settings": {
      "react": {
          "version": "15"
      }
    }
};
