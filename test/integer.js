
var binte = require('..');

exports['create from small integer'] = function (test) {
	var integer = binte.integer(42);
	
	test.ok(integer);
	test.equal(typeof integer, 'object');
	test.equal(integer.toString(), '42');
	test.equal(integer.negative(), false);
};