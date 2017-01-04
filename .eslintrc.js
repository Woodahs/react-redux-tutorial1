module.exports = {
  "globals": {
    "define": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jquery": false
  },
  "rules": {
    "quotes": 0,
    "no-trailing-spaces": 1,
    "eol-last": 1,
    "no-unused-vars": 1,
    "no-underscore-dangle": 1,
    "no-alert": 1,
    "no-console": 0,
    "no-lone-blocks": 1
  },
  "extends": "eslint:recommended"
};
