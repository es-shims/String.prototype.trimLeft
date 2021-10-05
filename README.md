String.prototype.trimLeft <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES2019-spec-compliant `String.prototype.trimLeft` shim. Invoke its "shim" method to shim `String.prototype.trimLeft` if it is unavailable.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://www.ecma-international.org/ecma-262/6.0/#sec-object.assign). In an ES6 environment, it will also work properly with `Symbol`s.

Most common usage:
```js
var trimLeft = require('string.prototype.trimleft');

assert(trimLeft(' \t\na \t\n') === 'a \t\n');

if (!String.prototype.trimLeft) {
	trimLeft.shim();
}

assert(trimLeft(' \t\na \t\n') === ' \t\na \t\n'.trimLeft());
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.com/package/string.prototype.trimleft
[npm-version-svg]: https://vb.teelaun.ch/es-shims/String.prototype.trimLeft.svg
[travis-svg]: https://travis-ci.org/es-shims/String.prototype.trimLeft.svg
[travis-url]: https://travis-ci.org/es-shims/String.prototype.trimLeft
[deps-svg]: https://david-dm.org/es-shims/String.prototype.trimLeft.svg
[deps-url]: https://david-dm.org/es-shims/String.prototype.trimLeft
[dev-deps-svg]: https://david-dm.org/es-shims/String.prototype.trimLeft/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/String.prototype.trimLeft#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/string.prototype.trimleft.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/string.prototype.trimleft.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/string.prototype.trimleft.svg
[downloads-url]: https://npm-stat.com/charts.html?package=string.prototype.trimleft
[codecov-image]: https://codecov.io/gh/es-shims/String.prototype.trimLeft/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/String.prototype.trimLeft/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/String.prototype.trimLeft
[actions-url]: https://github.com/es-shims/String.prototype.trimLeft/actions
