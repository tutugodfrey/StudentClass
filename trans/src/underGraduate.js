'use strict';

var _student = require('./student');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnderGraduate = function (_Student) {
	_inherits(UnderGraduate, _Student);

	function UnderGraduate() {
		_classCallCheck(this, UnderGraduate);

		return _possibleConstructorReturn(this, (UnderGraduate.__proto__ || Object.getPrototypeOf(UnderGraduate)).apply(this, arguments));
	}

	return UnderGraduate;
}(_student.Student);

var promise = new UnderGraduate('Promise', 2016, 'Uniport', 4);
console.log(promise.failExam());
//# sourceMappingURL=underGraduate.js.map