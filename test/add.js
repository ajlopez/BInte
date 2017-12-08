
var binte = require('..');

exports['add integer number to integer object'] = function (test) {
	var integer = binte.integer(41);
	
	var result = integer.add(1);
	
	test.ok(result);
	test.equal(typeof result, 'object');
	test.equal(result.toString(), '42');
	test.equal(result.negative(), false);
};

exports['add integer object to integer object'] = function (test) {
	var integer = binte.integer(41);
	var one = binte.integer(1);
	
	var result = integer.add(one);
	
	test.ok(result);
	test.equal(typeof result, 'object');
	test.equal(result.toString(), '42');
	test.equal(result.negative(), false);
};

