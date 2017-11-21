import chai from 'chai';
import  { Student } from './../src/student';
import { name } from './../src/student';
const  expect = chai.expect;

const goodLuck = new Student("Goodluck", 2012, "Delsu", 4 );
const studentInfo = {
				'name':'Goodluck',
				'dateOfAdminsion': 2012,
				'nameOfSchool':'Delsu',
				'durationOfStudy': 4
			}

describe ("Student class", () => {
	describe("Student", () => {
		it("should export a function", () => {
			expect(Student).to.be.a("function")
		});
		it("class instance should be an object", () => {
			expect(goodLuck).to.be.an("Object")
		});
		it("should be confirmed as admitted to a school", () => {
			expect(goodLuck.admitted("Goodluck", 2012, "Delsu")).to.be.equal(true)
		});
		it("class instance should be an object", () => {
			expect(goodLuck.getYearOfAdminssion('Goodluck')).to.be.equal(2012)
		});
		it("class instance should be an object", () => {
			expect(goodLuck.getStudentInfo('Goodluck')).to.be.deep.equal(studentInfo);
		});
		it("should return the expected year of graduation", () => {
			expect(goodLuck.graduate('Goodluck',  2019)).to.be.equal(2)
		});
	})
});


/*
		it("should export a function", () => {
			expect(goodLuck).to.be.a("Function")
		});
		it("should export a function", () => {
			expect(goodLuck.register()).to.be.an("object")
		})
		it("should export a function", () => {
			expect(goodLuck).to.be.a("function")
		}) 
*/