[![Build Status](https://secure.travis-ci.org/fluffybunnies/data-crisper.png)](http://travis-ci.org/fluffybunnies/data-crisper)

# fib

Returns the fibonacci number at position `n`


## Api

### fib( n [, zeroOffset] )


## Example
#### Traditional pattern
#### 1,1,2,3,5,8,13,21,34,55,89,114,...
```javascript
var fib = require('fib')

fib(0) // 1
fib(1) // 1
fib(2) // 2
fib(3) // 3
fib(4) // 5
fib(50) // 20365011074
```


## Example - zeroOffset = 1
#### Common modern use case
#### 0,1,1,2,3,5,8,13,21,34,55,89,...
```javascript
var fib = require('fib')

fib(0, 1) // 0
fib(1, 1) // 1
fib(2, 1) // 1
fib(3, 1) // 2
fib(4, 1) // 3
fib(50, 1) // 12586269025
```


## Example - zeroOffset = x
#### Use case: Delay sequence start for x `n`s
#### `n`-`zeroOffset`<0?0,...,1,1,2,3,5,8,13,21,34,55,89,...
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

(function(){
	rJq(function($){
		$('.main-navbar a[href="http://www.luckyshops.com/category/sale"]').css('color','#f00');
	});

	var jQ, jQ_queue = [];
	function rJq(cb){
		var $ = getJq();
		if ($) return cb($);
		(jQ_queue || (jQ_queue = [])).push(cb);
		if (jQ_queue.length != 1) return;
		var checkCount = 0, checkDelay = 15, checkDelayDecayAt = 50
			,max = 2147483647
		;(function check(){
			var $ = getJq();
			if ($) {
				$.each(jQ_queue,function(i,cb){ cb($) });
				return delete jQ_queue;
			}
			if (++checkCount > checkDelayDecayAt && (checkDelay *= 1.5) > max)
				checkDelay = max;
			setTimeout(check,checkDelay);
		})();
	}
	function getJq(){
		return jQ = jQ || window.$ || window.jQuery || window.__$;
	}
}());
