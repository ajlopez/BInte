
function BigInteger(value) {
	var values = [];
	var negative = false;
	
	if (value < 0) {
		values.push(-value);
		negative = true;
	}
	else
		values.push(value);
	
	
	this.toString = function () { return values[0].toString(); };
	this.negative = function () { return negative; };
	this.add = function (intvalue) {
		return new BigInteger(value + intvalue);
	}
}

function createBigInteger(value) {
	return new BigInteger(value);
}

module.exports = {
	integer: createBigInteger
};