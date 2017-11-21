
// create super student class

export class Student {
	constructor(name, dateOfAdmission, nameOfSchool, durationOfStudy ) {
		//let now = new Date();
		//now = now.getFullYear();
		this.name = name;
		this.dateOfAdmission = dateOfAdmission;
		this.nameOfSchool = nameOfSchool;
		// digit represent the years
		this.durationOfStudy = durationOfStudy;
		this.expectedToGraduate = dateOfAdmission+ this.durationOfStudy
	}
	admitted(name, dateOfAdmission, nameOfSchool) {
		if(this.name !== name) {
			return false;
		} else if (this.dateOfAdmission !== dateOfAdmission){
			return false;
		} else if(this.nameOfSchool !== nameOfSchool) {
			return false
		} else if(this.name === name && this.dateOfAdmission === dateOfAdmission && this.nameOfSchool === nameOfSchool) {
			return true;
		}
	}
	getYearOfAdmission(name) {
		if (this.name === name) {
			return this.dateOfAdmission;
		}
	}
	getStudentInfo(name) {
		if (this.name === name) {
			return {
				'name':this.name,
				'dateOfAdmision': this.dateOfAdmission,
				'nameOfSchool':this.nameOfSchool,
				'durationOfStudy': this.durationOfStudy,
				'expectedToGraduate': this.expectedToGraduate
			}
		}
	}
	// tell whether the student is still studying or not
	graduate(name, currentYear) {
		if(this.name === name) {
			const yearsRemaining = this.expectedToGraduate - currentYear;
			if(yearsRemaining === 0){
				return  'Graduated';
			} else {
				return yearsRemaining;
			}
		} 

	}
} 