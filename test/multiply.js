
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

exports['multiply integer number by ten many times'] = function (test) {
	var integer = binte.integer(1);
	var expected = '1';
	
	for (var k = 0; k < 32; k++) {
		integer = integer.multiply(10);
		expected = expected + '0';
		test.equal(integer.toString(), expected);
		test.equal(integer.negative(), false);
	}
};
