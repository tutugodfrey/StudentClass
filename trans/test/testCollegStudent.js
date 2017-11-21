'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _CollegeStudent = require('./../src/CollegeStudent');

var _CollegeStudent2 = _interopRequireDefault(_CollegeStudent);

var _Student = require('./../src/Student');

var _Student2 = _interopRequireDefault(_Student);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;
var assert = _chai2.default.assert;
// write tests for the college student class
var Jenkins = new _CollegeStudent2.default('Jenkins', 2016, 'Uniport', 4);
var studentInfo = {
	'name': 'Jenkins',
	'dateOfAdmision': 2017,
	'nameOfSchool': 'Delsu',
	'durationOfStudy': 4,
	'expectedToGraduate': 2021
};

describe('College student class', function () {
	describe('Valid Cases', function () {
		it('College student class', function () {
			expect(_CollegeStudent2.default).to.be.a("function");
		});
		it('College student class', function () {
			expect(Jenkins).to.be.an('Object');
		});
		it('College student class', function () {
			assert.instanceOf(Jenkins, _CollegeStudent2.default);
		});
	});
});
//# sourceMappingURL=testCollegStudent.js.map