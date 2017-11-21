'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _student = require('./../src/student');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

var goodLuck = new _student.Student("Goodluck");

describe("Student class", function () {
	describe("Student", function () {
		it("should export a function", function () {
			expect(_student.Student).to.be.a("function");
		});
		it("class instance should be an object", function () {
			expect(goodLuck).to.be.an("Object");
		});
	});
});
//# sourceMappingURL=test.js.map