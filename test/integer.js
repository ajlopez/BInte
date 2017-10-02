
var binte = require('..');

exports['create from small integer'] = function (test) {
	var integer = binte.integer(42);
	
	test.ok(integer);
	test.equal(typeof integer, 'object');
	test.equal(integer.toString(), '42');
	test.equal(integer.negative(), false);
};

exports['add integer number to integer object'] = function (test) {
	var integer = binte.integer(41);
	
	var result = integer.add(1);
	
	test.ok(result);
	test.equal(typeof result, 'object');
	test.equal(result.toString(), '42');
	test.equal(result.negative(), false);
};