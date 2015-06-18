
var vals = [1,1]

module.exports = function(n, zeroOffset) {
	if (zeroOffset) {
		n -= zeroOffset
		if (n < 0) return 0
	}
	if (typeof vals[n] !== 'undefined')
		return vals[n]
	for (var i=vals.length;i<=n;++i)
		vals[i] = vals[i-2] + vals[i-1]
	return vals[n]
}
