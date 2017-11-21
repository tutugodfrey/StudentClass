'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _student = require('./../src/student');

var _student2 = _interopRequireDefault(_student);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

describe("student class", function () {
	describe("valid input", function () {
		it("should export a function", function () {
			expect(Student("name").to.be("function"));
		});
	});
});
//# sourceMappingURL=test.js.map