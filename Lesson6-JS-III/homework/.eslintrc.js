module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "quotes": [
            "error",
            "single"
        ],
        "no-console": ["warn", { "allow": ["warn"] }],
        "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
        "semi": [
            "error",
            "always"
        ]
    }
};
