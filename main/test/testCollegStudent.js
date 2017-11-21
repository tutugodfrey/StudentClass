
import chai from 'chai';
import CollegeStudent from './../src/CollegeStudent';
import  Student from './../src/Student';

const expect = chai.expect;
const assert = chai.assert;
// write tests for the college student class
const Jenkins = new CollegeStudent('Jenkins', 2016, 'Uniport', 4 );
const studentInfo = {
				'name':'Jenkins',
				'dateOfAdmision': 2017,
				'nameOfSchool':'Delsu',
				'durationOfStudy': 4,
				'expectedToGraduate': 2021
			}



describe ('College student class', () => {
	describe ('Valid Cases', () => {
		 it('College student class', () => {
		 	expect(CollegeStudent).to.be.a("function")
		 });
		 it('College student class', () => {
		 	expect(Jenkins).to.be.an('Object')
		 });
		 it('College student class', () => {
		 	assert.instanceOf(Jenkins, CollegeStudent);
		 });
		
	});
})


