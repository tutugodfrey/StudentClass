import chai from 'chai';
import student from './../src/student';
const  expect = chai.expect;

describe ("student class", () => {
	describe("valid input", () => {
		it("should export a function", () => {
			expect(Student("name").to.be("function"))
		})
	})
})