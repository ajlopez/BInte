
function BigInteger(value) {
	this.toString = function () { return value.toString(); };
	this.negative = function () { return value < 0; };
}

function createBigInteger(value) {
	return new BigInteger(value);
}

module.exports = {
	integer: createBigInteger
};