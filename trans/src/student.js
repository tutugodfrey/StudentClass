'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// create super student class

var Student = exports.Student = function () {
	function Student(name, dateOfAdmission, nameOfSchool, durationOfStudy) {
		_classCallCheck(this, Student);

		//let now = new Date();
		//now = now.getFullYear();
		this.name = name;
		this.dateOfAdmission = dateOfAdmission;
		this.nameOfSchool = nameOfSchool;
		// digit represent the years
		this.durationOfStudy = durationOfStudy;
		this.expectedToGraduate = dateOfAdmission + this.durationOfStudy;
	}

	_createClass(Student, [{
		key: 'admitted',
		value: function admitted(name, dateOfAdmission, nameOfSchool) {
			if (this.name !== name) {
				return false;
			} else if (this.dateOfAdmission !== dateOfAdmission) {
				return false;
			} else if (this.nameOfSchool !== nameOfSchool) {
				return false;
			} else if (this.name === name && this.dateOfAdmission === dateOfAdmission && this.nameOfSchool === nameOfSchool) {
				return true;
			}
		}
	}, {
		key: 'getYearOfAdmission',
		value: function getYearOfAdmission(name) {
			if (this.name === name) {
				return this.dateOfAdmission;
			}
		}
	}, {
		key: 'getStudentInfo',
		value: function getStudentInfo(name) {
			if (this.name === name) {
				return {
					'name': this.name,
					'dateOfAdmision': this.dateOfAdmission,
					'nameOfSchool': this.nameOfSchool,
					'durationOfStudy': this.durationOfStudy,
					'expectedToGraduate': this.expectedToGraduate
				};
			}
		}
		// tell whether the student is still studying or not

	}, {
		key: 'graduate',
		value: function graduate(name, currentYear) {
			if (this.name === name) {
				var yearsRemaining = this.expectedToGraduate - currentYear;
				if (yearsRemaining === 0) {
					return 'Graduated';
				} else {
					return yearsRemaining;
				}
			}
		}
	}, {
		key: 'failExam',
		value: function failExam() {
			return "You are on probation";
		}
	}]);

	return Student;
}();

var goodLuck = new Student('Goodluck', 2017, 'Delsu', 4);
console.log(goodLuck.failExam());
console.log(goodLuck.getStudentInfo('Goodluck'));
//# sourceMappingURL=student.js.map