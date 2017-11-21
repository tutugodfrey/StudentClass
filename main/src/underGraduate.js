
import { Student } from './student';

class UnderGraduate extends Student {
	//use default constructor


}

const promise = new UnderGraduate('Promise', 2016, 'Uniport', 4)
console.log(promise.failExam());