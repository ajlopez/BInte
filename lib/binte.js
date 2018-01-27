
var DIVISOR = 1000000000000000; // 10^15
var DLENGTH = 15;

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
			values.push(value % DIVISOR);
			value = Math.floor(value / DIVISOR);
		}
	}
	else {
		var lv = values.length;
		
		while (lv && values[lv - 1] == 0)
			lv--;
		
		if (lv && lv < values.length)
			values = values.slice(0, lv);
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

		if (intvalue instanceof BigInteger) {
			var subvalues = intvalue.values();
			for (var k = 0; k < newvalues.length && k < subvalues.length; k++)
				newvalues[k] -= subvalues[k];
		}
		else
			newvalues[0] -= intvalue;
		
		return new BigInteger(newvalues, negative);
	};
	
	this.values = function () { return values; };
	
	function valueToString(value) {
		var result = value.toString();
		
		while (result.length < DLENGTH)
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