[![Build Status](https://secure.travis-ci.org/fluffybunnies/fib.png)](http://travis-ci.org/fluffybunnies/fib)

# fib

Returns the fibonacci number at position `n`


### Api

#### fib( n [, zeroOffset] )


### Example
##### Traditional pattern
##### 1, 1, 2, 3, 5, 8,13, 21, 34, 55, 89, 144, ...
```javascript
var fib = require('fib')

fib(0) // 1
fib(1) // 1
fib(2) // 2
fib(3) // 3
fib(4) // 5
fib(50) // 20365011074
```


### Example - zeroOffset = 1
##### Common modern use case
##### 0, 1, 1, 2, 3, 5, 8,13, 21, 34, 55, 89, ...
```javascript
var fib = require('fib')

fib(0, 1) // 0
fib(1, 1) // 1
fib(2, 1) // 1
fib(3, 1) // 2
fib(4, 1) // 3
fib(50, 1) // 12586269025
```


### Example - zeroOffset = x
##### Use case: Delay sequence start for x `n`s
##### [0 if `n`-`zeroOffset` < 0 ...], 1, 1, 2, 3, 5, 8,13, 21, 34, 55, 89, ...
```javascript
var fib = require('fib')

function lostConnection(){
	var checkDelay = 15, checkDelayDecayAt = 100, checkCount = 0;
	(function checkForConnection(){
		if (haveConnection())
			return resumeApp()
		setTimeout( checkForConnection, checkDelay * fib(++checkCount, checkDelayDecayAt) )
	}());
}
```

