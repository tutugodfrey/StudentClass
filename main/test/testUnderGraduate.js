
import chai from 'chai';
import UnderGraduate from './../src/underGraduate';
import  Student from './../src/Student';
const expect = chai.expect;
const assert = chai.assert;
const promise = new UnderGraduate('Promise', 2016, 'Uniport', 4);
const studentInfo = {
				'name':'Promise',
				'dateOfAdmision': 2016,
				'nameOfSchool':'Uniport',
				'durationOfStudy': 4,
				'expectedToGraduate': 2019
			}
const topic = 'My bootcamp projects';

describe ('UnderGraduate student class', () => {
	describe ('invalid Cases', () => {
		 it('UnderGraduate student class', () => {
		 	expect(UnderGraduate).to.be.a("function")
		 });
		 it('should return The project topc', () => {
			expect(promise.writeProject('My bootcamp projects')).to.not.equal('An other project topic');
	  	});
		 it('should return return a boolean', () => {
			expect(promise.checkProjectWritten('My bootcamp projects')).to.not.equal(false);
	   });
	});

	describe ('Valid Cases', () => {
		 it('UnderGraduate student class', () => {
		 	expect(UnderGraduate).to.be.a("function")
		 });
		 it('College student class', () => {
		 	expect(promise).to.be.an('Object')
		 });
		 it('College student class', () => {
		 	assert.instanceOf(promise, UnderGraduate);
		 });
		 it('should return The project topc', () => {
			expect(promise.writeProject('My bootcamp projects')).to.be.equal('My bootcamp projects');
	  	});
		 it('should return return a boolean', () => {
			expect(promise.checkProjectWritten('My bootcamp projects')).to.be.equal(true);
	   });
	});
})

