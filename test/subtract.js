
var binte = require('..');

exports['add subtract integer number to integer object'] = function (test) {
	var integer = binte.integer(43);
	
	var result = integer.subtract(1);
	
	test.ok(result);
	test.equal(typeof result, 'object');
	test.equal(result.toString(), '42');
	test.equal(result.negative(), false);
};

exports['add subtract big integer number from big integer object'] = function (test) {
	var integer = binte.integer(2000000000000043);
	
	var result = integer.subtract(binte.integer(2000000000000001));
	
	test.ok(result);
	test.equal(typeof result, 'object');
	test.equal(result.toString(), '42');
	test.equal(result.negative(), false);
};
