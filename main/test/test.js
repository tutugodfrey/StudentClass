import chai from 'chai';
import  { Student } from './../src/student';
import { name } from './../src/student';
const  expect = chai.expect;

const goodLuck = new Student("Goodluck");

describe ("Student class", () => {
	describe("Student", () => {
		it("should export a function", () => {
			expect(Student).to.be.a("function")
		});
		it("class instance should be an object", () => {
			expect(goodLuck).to.be.an("Object")
		});
	})
});

