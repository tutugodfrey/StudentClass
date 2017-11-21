'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _student = require('./student');

var _student2 = _interopRequireDefault(_student);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnderGraduate = function (_Student) {
	_inherits(UnderGraduate, _Student);

	//use default constructor
	function UnderGraduate() {
		_classCallCheck(this, UnderGraduate);

		var _this = _possibleConstructorReturn(this, (UnderGraduate.__proto__ || Object.getPrototypeOf(UnderGraduate)).call(this));

		_this.projectWritten = false;
		_this.projectTopic = '';
		return _this;
	}
	// undergrates write porjects


	_createClass(UnderGraduate, [{
		key: 'writeProject',
		value: function writeProject(topic) {
			this.projectTopic = topic;
		}
		// check if the student have writen his/her project

	}, {
		key: 'checkProjectWritten',
		value: function checkProjectWritten(topic) {
			if (this.projectTopic === topic) {
				return true;
			}
		}
	}]);

	return UnderGraduate;
}(_student2.default);

var promise = new UnderGraduate('Promise', 2016, 'Uniport', 4);
// user the super class failExam method
console.log(UnderGraduate.welcome('Uniport', 'Promise'));
promise.writeProject("My bootcamp projects");
console.log(promise.checkProjectWritten("My bootcamp projects"));
console.log(promise.failExam());
//# sourceMappingURL=underGraduate.js.map