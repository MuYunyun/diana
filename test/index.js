// [istanbul-instrumenter-loader的用法](https://github.com/webpack-contrib/istanbul-instrumenter-loader)
const tests = require.context('./', true, /spec\.js$/);

tests.keys().forEach(tests);

// const components = require.context('../src/', true, /index\.js$/)

// components.keys().forEach(components);