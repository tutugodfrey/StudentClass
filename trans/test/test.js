'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _student = require('./../src/student');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

var goodLuck = new _student.Student('Goodluck', 2017, 'Delsu', 4);
// current year to be 2019
var currentYear = 2019;
var studentInfo = {
	'name': 'Goodluck',
	'dateOfAdmision': 2017,
	'nameOfSchool': 'Delsu',
	'durationOfStudy': 4,
	'expectedToGraduate': 2021
};
var wrongStudentName = ['Harray', 2017, 'Delsu', 4];
var wrongStudentYearAdmitted = ['Goodluck', 2018, 'Delsu', 4];
var wrongStudentSchool = ['Goodluck', 2017, 'Uniben', 4];
var wrongStudentYearOfSd = ['Goodluck', 2017, 'Uniben', 5];
describe("Student class", function () {
	describe('Invalid cases', function () {
		it('should return false for wrong name', function () {
			expect(goodLuck.admitted(wrongStudentName)).to.be.equal(false);
		});
		it('should return false for wrong name', function () {
			expect(goodLuck.admitted(wrongStudentSchool)).to.be.equal(false);
		});
		it('should return false for wrong name', function () {
			expect(goodLuck.admitted(wrongStudentYearAdmitted)).to.be.equal(false);
		});
		it('should return false for wrong name', function () {
			expect(goodLuck.admitted(wrongStudentYearOfSd)).to.be.equal(false);
		});
	});
	describe("Student", function () {
		it('should export a function', function () {
			expect(_student.Student).to.be.a("function");
		});
		it('class instance should be an object', function () {
			expect(goodLuck).to.be.an('Object');
		});
		it('should be confirmed as admitted to a school', function () {
			expect(goodLuck.admitted('Goodluck', 2017, 'Delsu', 4)).to.be.equal(true);
		});
		it('class instance should be an object', function () {
			expect(goodLuck.getYearOfAdmission('Goodluck')).to.be.equal(2017);
		});
		it('class instance should be an object', function () {
			expect(goodLuck.getStudentInfo('Goodluck')).to.be.deep.equal(studentInfo);
		});
		it('should return the expected years remaining for study', function () {
			// 2 represent -> 2 year from current year
			expect(goodLuck.graduate('Goodluck', currentYear)).to.be.equal(2);
		});
		it('should respond that the student have graduated', function () {
			expect(goodLuck.graduate('Goodluck', 2021)).to.be.equal('Graduated');
		});
	});
});
//# sourceMappingURL=test.js.map