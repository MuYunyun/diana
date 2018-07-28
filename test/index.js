// [istanbul-instrumenter-loader的用法](https://github.com/webpack-contrib/istanbul-instrumenter-loader)
const tests = require.context('./', true, /spec\.js$/);

tests.keys().forEach(tests);