
import  Student  from './student';

class UnderGraduate extends Student {
	//use default constructor
	constructor () {
		super()
		this.projectWritten = false;
		this.projectTopic = '';
	}
	// undergrates write porjects
	writeProject(topic) {
		this.projectTopic = topic;
		return this.projectTopic
	}
	// check if the student have writen his/her project
	checkProjectWritten (topic){
		if (this.projectTopic === topic){
			return true;
		}
	}
}

export default UnderGraduate;
const promise = new UnderGraduate('Promise', 2016, 'Uniport', 4);
// user the super class failExam method
console.log(UnderGraduate.welcome('Uniport', 'Promise'));
promise.writeProject('My bootcamp projects')
console.log(promise.checkProjectWritten("My bootcamp projects"))
console.log(promise.failExam());