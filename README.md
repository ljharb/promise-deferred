#promise-deferred <sup>[![Version Badge][2]][1]</sup>

[![Build Status][3]][4] [![dependency status][5]][6] [![dev dependency status][7]][8]

[![npm badge][11]][1]

[![browser support][9]][10]

A lightweight Deferred implementation, on top of Promises/A+

## Examples
```js
var Deferred = require('promise-deferred');

var deferred = new Deferred();

// set up handlers
deferred.promise.then(function (value) {}, function (error) {});

// resolve
deferred.resolve('a value');

// reject
deferred.reject(new Error('oh noes'));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/promise-deferred
[2]: http://vb.teelaun.ch/ljharb/promise-deferred.svg
[3]: https://travis-ci.org/ljharb/promise-deferred.svg
[4]: https://travis-ci.org/ljharb/promise-deferred
[5]: https://david-dm.org/ljharb/promise-deferred.svg
[6]: https://david-dm.org/ljharb/promise-deferred
[7]: https://david-dm.org/ljharb/promise-deferred/dev-status.svg
[8]: https://david-dm.org/ljharb/promise-deferred#info=devDependencies
[9]: https://ci.testling.com/ljharb/promise-deferred.png
[10]: https://ci.testling.com/ljharb/promise-deferred
[11]: https://nodei.co/npm/promise-deferred.png?downloads=true&stars=true

