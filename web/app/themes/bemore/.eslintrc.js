module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "wp": true
  },
  "env": {
    "node": true,
    "es6": true,
    "amd": true,
    "browser": true,
    "jquery": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "globalReturn": true,
      "jsx": true,
      "modules": true,
      "generators": false,
      "objectLiteralDuplicateProperties": false,
      "experimentalObjectRestSpread": true
    },
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "plugins": [
    "import",
    "react",
  ],
  "settings": {
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ]
  },
  "rules": {
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }
    ],
    "semi": 0,
  }
}
