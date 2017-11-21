'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _student = require('./student');

var _student2 = _interopRequireDefault(_student);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollegeStudent = function (_Student) {
	_inherits(CollegeStudent, _Student);

	function CollegeStudent() {
		_classCallCheck(this, CollegeStudent);

		return _possibleConstructorReturn(this, (CollegeStudent.__proto__ || Object.getPrototypeOf(CollegeStudent)).apply(this, arguments));
	}

	_createClass(CollegeStudent, [{
		key: 'failExam',

		// use parend constructor function
		value: function failExam() {
			this.durationOfStudy = this.durationOfStudy + 1;
			return this.durationOfStudy;
		}
	}]);

	return CollegeStudent;
}(_student2.default);

exports.default = CollegeStudent;


var jenkins = new CollegeStudent('Jenkins', 2016, 'Uniport', 4);
// jenkins use override the super cass fail exam method
console.log(jenkins.failExam());
//# sourceMappingURL=CollegeStudent.js.map