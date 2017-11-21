'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _underGraduate = require('./../src/underGraduate');

var _underGraduate2 = _interopRequireDefault(_underGraduate);

var _Student = require('./../src/Student');

var _Student2 = _interopRequireDefault(_Student);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;
var assert = _chai2.default.assert;
var promise = new _underGraduate2.default('Promise', 2016, 'Uniport', 4);
var studentInfo = {
	'name': 'Promise',
	'dateOfAdmision': 2016,
	'nameOfSchool': 'Uniport',
	'durationOfStudy': 4,
	'expectedToGraduate': 2019
};
var topic = 'My bootcamp projects';

describe('UnderGraduate student class', function () {
	describe('invalid Cases', function () {
		it('UnderGraduate student class', function () {
			expect(_underGraduate2.default).to.be.a("function");
		});
		it('should return The project topc', function () {
			expect(promise.writeProject('My bootcamp projects')).to.not.equal('An other project topic');
		});
		it('should return return a boolean', function () {
			expect(promise.checkProjectWritten('My bootcamp projects')).to.not.equal(false);
		});
	});

	describe('Valid Cases', function () {
		it('UnderGraduate student class', function () {
			expect(_underGraduate2.default).to.be.a("function");
		});
		it('College student class', function () {
			expect(promise).to.be.an('Object');
		});
		it('College student class', function () {
			assert.instanceOf(promise, _underGraduate2.default);
		});
		it('should return The project topc', function () {
			expect(promise.writeProject('My bootcamp projects')).to.be.equal('My bootcamp projects');
		});
		it('should return return a boolean', function () {
			expect(promise.checkProjectWritten('My bootcamp projects')).to.be.equal(true);
		});
	});
});
//# sourceMappingURL=testUnderGraduate.js.map