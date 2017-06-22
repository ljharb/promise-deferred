'use strict';

var Promise = require('promise/lib/es6-extensions');

var Deferred = function Deferred() {
	if (!(this instanceof Deferred)) {
		return new Deferred();
	}

	this.promise = new Promise(function (resolve, reject) {
		this.resolve = resolve;
		this.reject = reject;
	}.bind(this));

	return this;
};
Deferred.Promise = Promise;

module.exports = Deferred;
