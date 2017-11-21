
import  Student  from './student';

class CollegeStudent extends Student {
 	// use parend constructor function
 	failExam(){
		this.durationOfStudy = this.durationOfStudy + 1;
		return this.durationOfStudy
	}
}

export  default CollegeStudent;


const jenkins = new CollegeStudent('Jenkins', 2016, 'Uniport', 6 );
// jenkins use override the super cass fail exam method
console.log(jenkins.failExam());