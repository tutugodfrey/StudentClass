import chai from 'chai';
import  Student  from './../src/student';
import { name } from './../src/student';
const  expect = chai.expect;

const goodLuck = new Student('Goodluck', 2017, 'Delsu', 4 );
// current year to be 2019
const currentYear = 2019;
const studentInfo = {
				'name':'Goodluck',
				'dateOfAdmision': 2017,
				'nameOfSchool':'Delsu',
				'durationOfStudy': 4,
				'expectedToGraduate': 2021
			}
const wrongStudentName = ['Harray', 2017, 'Delsu', 4];
const wrongStudentYearAdmitted = ['Goodluck', 2018, 'Delsu', 4];
const wrongStudentSchool = ['Goodluck', 2017, 'Uniben', 4];
const wrongStudentYearOfSd = ['Goodluck', 2017, 'Uniben', 5]  
describe ("Student class", () => {
	describe('Invalid cases', () => {
		it('should return false for wrong name', () => {
			expect(goodLuck.admitted(wrongStudentName)).to.be.equal(false);
		});
		it('should return false for wrong name', () => {
			expect(goodLuck.admitted(wrongStudentSchool)).to.be.equal(false);
		});
		it('should return false for wrong name', () => {
			expect(goodLuck.admitted(wrongStudentYearAdmitted)).to.be.equal(false);
		});
		it('should return false for wrong name', () => {
			expect(goodLuck.admitted(wrongStudentYearOfSd)).to.be.equal(false);
		});
	})
	describe("Student", () => {
		it('should export a function', () => {
			expect(Student).to.be.a("function")
		});
		it('class instance should be an object', () => {
			expect(goodLuck).to.be.an('Object')
		});
		it('should be confirmed as admitted to a school', () => {
			expect(goodLuck.admitted('Goodluck', 2017, 'Delsu', 4)).to.be.equal(true)
		});
		it('class instance should be an object', () => {
			expect(goodLuck.getYearOfAdmission('Goodluck')).to.be.equal(2017)
		});
		it('class instance should be an object', () => {
			expect(goodLuck.getStudentInfo('Goodluck')).to.be.deep.equal(studentInfo);
		});
		it('should return the expected years remaining for study', () => {
			// 2 represent -> 2 year from current year
			expect(goodLuck.graduate('Goodluck',  currentYear)).to.be.equal(2)
		});
		it('should respond that the student have graduated', () => {
			expect(goodLuck.graduate('Goodluck', 2021)).to.be.equal('Graduated')
		});
	})
});
