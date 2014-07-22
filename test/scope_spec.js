/* jshint globalstrict: true */
/* global Scope: false */

/* The above lines let JSHint know it’s OK to refer to a global variable called Scope in the file. */

 'use strict';
describe("Scope", function() {
	it("can be constructed and used as an object", function() {
		var scope = new Scope();
		scope.aProperty = 1;
		expect(scope.aProperty).toBe(1);
	});
});
