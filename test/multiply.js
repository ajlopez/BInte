
var binte = require('..');

exports['multiply integer number by integer object'] = function (test) {
	var integer = binte.integer(21);
	
	var result = integer.multiply(2);
	
	test.ok(result);
	test.equal(typeof result, 'object');
	test.equal(result.toString(), '42');
	test.equal(result.negative(), false);
};

exports['multiply integer number by negative integer object'] = function (test) {
	var integer = binte.integer(21);
	
	var result = integer.multiply(-2);
	
	test.ok(result);
	test.equal(typeof result, 'object');
	test.equal(result.toString(), '-42');
	test.equal(result.negative(), true);
};
