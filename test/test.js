var test = require('tape')
,fib = require('../')

test('worky',function(t){
	t.plan(10);

	var map = {
		0: 1,
		1: 1,
		2: 2,
		3: 3,
		4: 5,
		5: 8,
		6: 13,
		7: 21,
		8: 34,
		9: 55
	}
	for (var k in map)
		t.ok(fib(k) == map[k], 'fib('+k+')=='+map[k]+' ('+fib(k)+')')

})

test('zero offset',function(t){
	t.plan(6+7);

	var map = {
		0: 0,
		1: 1,
		2: 1,
		3: 2,
		4: 3,
		5: 5
	}
	for (var k in map)
		t.ok(fib(k,1) == map[k], 'fib('+k+')=='+map[k]+' ('+fib(k,1)+')')

	var map = {
		0: 0,
		1: 0,
		2: 1,
		3: 1,
		4: 2,
		5: 3,
		6: 5
	}
	for (var k in map)
		t.ok(fib(k,2) == map[k], 'fib('+k+')=='+map[k]+' ('+fib(k,2)+')')

})