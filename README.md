# eslint-config-jsdoc-essential

[![wemake.services](https://img.shields.io/badge/style-wemake.services-green.svg?label=&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](http://wemake.services) [![Build Status](https://travis-ci.org/wemake-services/eslint-config-jsdoc-essential.svg?branch=master)](https://travis-ci.org/wemake-services/eslint-config-jsdoc-essential)

Shareable configuration for [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc).

The main idea of this configuration is to be:

1. Strict about syntax
2. Permissive about types (because we use `flow` for type annotations)
3. Opened for further extensions


## Installation

```bash
npm install --save-dev eslint-config-jsdoc-essential
```

Then, modify your `eslint` configuration:

```json
{
  "extends": [
    "jsdoc-essential"
  ]
}
```

Done! Later you can modify your configuration to include any extra rules you need.


## Code example

This code is considered valid (and beautiful):

```js
/**
* Sums two numbers.
* This is just an example.
*
* @param a - First number.
* @param b - Second number.
* @returns Sum of the numbers, obviously.
*/
function sum (a, b) {
  return proxyRequest(value)
}
```


## License

MIT.
