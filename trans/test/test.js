'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _student = require('./../src/student');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

var goodLuck = new _student.Student("Goodluck", 2017, "Delsu", 4);
var studentInfo = {
	'name': 'Goodluck',
	'dateOfAdmision': 2017,
	'nameOfSchool': 'Delsu',
	'durationOfStudy': 4
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
			expect(goodLuck.admitted("Goodluck", 2017, "Delsu")).to.be.equal(true);
		});
		it("class instance should be an object", function () {
			expect(goodLuck.getYearOfAdmission('Goodluck')).to.be.equal(2017);
		});
		it("class instance should be an object", function () {
			expect(goodLuck.getStudentInfo('Goodluck')).to.be.deep.equal(studentInfo);
		});
		it("should return the expected years of remaining for study", function () {
			expect(goodLuck.graduate('Goodluck', 2019)).to.be.equal(2);
		});
		it("should respond that the student have graduated", function () {
			expect(goodLuck.graduate('Goodluck', 2021)).to.be.equal('Graduated');
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