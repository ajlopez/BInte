
function BigInteger(values, negative) {
	if (typeof values === 'number') {
		var value = values;
		values = [];
		
		if (negative == null && value < 0) {
			negative = true;
			value = -value;
		}
		else if (negative == null)
			negative = false;

		while (value) {
			values.push(value % 1000000);
			value = Math.floor(value / 1000000);
		}
	}
		
	this.toString = function () {
		var result = '';
		
		for (k = 0; k < values.length - 1; k++)
			result = valueToString(values[k]) + result;
		
		if (values.length)
			result = values[values.length - 1].toString() + result;
		
		if (negative)
			result = '-' + result;
		
		return result;
	};
	
	this.negative = function () { return negative; };
	
	this.add = function (intvalue) {
		var newvalues = values.slice();

		if (intvalue instanceof BigInteger) {
			var addvalues = intvalue.values();
			
			for (var k = 0; k < newvalues.length && k < addvalues.length; k++)
				newvalues[k] += addvalues[k];
		}
		else
			newvalues[0] += intvalue;
		
		return new BigInteger(newvalues, negative);
	};
	
	this.subtract = function (intvalue) {
		var newvalues = values.slice();

		newvalues[0] -= intvalue;
		
		return new BigInteger(newvalues, negative);
	};
	
	this.values = function () { return values; };
	
	function valueToString(value) {
		var result = value.toString();
		
		while (result.length < 6)
			result = '0' + result;
		
		return result;
	}
}

function createBigInteger(value) {
	return new BigInteger(value);
}

module.exports = {
	integer: createBigInteger
};