'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// create super student class

var Student = exports.Student = function () {
	function Student(name, dateOfAdminssion, nameOfSchool) {
		_classCallCheck(this, Student);

		this.name = name;
		this.dateOfAdminssion = dateOfAdminssion;
		this.nameOfSchool = nameOfSchool;
	}

	_createClass(Student, [{
		key: 'admitted',
		value: function admitted(name, dateOfAdminssion, nameOfSchool) {
			if (this.name === name && this.dateOfAdminssion === dateOfAdminssion && this.nameOfSchool === nameOfSchool) {
				return true;
			}
		}
	}, {
		key: 'getYearOfAdminssion',
		value: function getYearOfAdminssion(name) {
			if (this.name === name) {
				return this.dateOfAdminssion;
			}
		}
	}, {
		key: 'getStudentInfo',
		value: function getStudentInfo(name) {
			if (this.name === name) {
				return {
					'name': this.name,
					'dateOfAdminsion': this.dateOfAdminssion,
					'nameOfSchool': this.nameOfSchool
				};
			}
		}
	}]);

	return Student;
}();
//# sourceMappingURL=student.js.map