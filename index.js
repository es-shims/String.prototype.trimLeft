'use strict';

var bind = require('function-bind');
var define = require('define-properties');
var replace = bind.call(Function.call, String.prototype.replace);

var leftWhitespace = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]*/;

var trimLeft = function trimLeft() {
	return replace(this, leftWhitespace, '');
};

var boundTrimLeft = bind.call(Function.call, trimLeft);
define(boundTrimLeft, {
	shim: function shimTrimLeft() {
		var zeroWidthSpace = '\u200b';
		define(String.prototype, { trimLeft: trimLeft }, {
			trimLeft: function () {
				return zeroWidthSpace.trimLeft() !== zeroWidthSpace;
			}
		});
		return String.prototype.trimLeft;
	}
});

module.exports = boundTrimLeft;
