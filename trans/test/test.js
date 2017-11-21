'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _student = require('./../src/student');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

var goodLuck = new _student.Student("Goodluck", 2012, "Delsu");
var studentInfo = {
	'name': 'Goodluck',
	'dateOfAdminsion': 2012,
	'nameOfSchool': 'Delsu'
};

describe("Student class", function () {
	describe("Student", function () {
		it("should export a function", function () {
			expect(_student.Student).to.be.a("function");
		});
		it("class instance should be an object", function () {
			expect(goodLuck).to.be.an("Object");
		});
		it("should be confirmed as admitted to a school", function () {
			expect(goodLuck.admitted("Goodluck", 2012, "Delsu")).to.be.equal(true);
		});
		it("class instance should be an object", function () {
			expect(goodLuck.getYearOfAdminssion('Goodluck')).to.be.equal(2012);
		});
		it("class instance should be an object", function () {
			expect(goodLuck.getStudentInfo('Goodluck')).to.be.deep.equal(studentInfo);
		});
	});
});

/*
		it("should export a function", () => {
			expect(goodLuck).to.be.a("Function")
		});
		it("should export a function", () => {
			expect(goodLuck.register()).to.be.an("object")
		})
		it("should export a function", () => {
			expect(goodLuck).to.be.a("function")
		}) 
*/
//# sourceMappingURL=test.js.map