
// create super student class

export class Student {
	constructor(name, dateOfAdminssion, nameOfSchool, durationOfStudy ) {
		let now = new Date();
		now = now.getFullYear();
		this.name = name;
		this.dateOfAdminssion = dateOfAdminssion;
		this.nameOfSchool = nameOfSchool;
		// digit represent the years
		this.durationOfStudy = durationOfStudy;
		this.expectedToGraduate = now + this.durationOfStudy
	}
	admitted(name, dateOfAdminssion, nameOfSchool) {
		if(this.name === name && this.dateOfAdminssion === dateOfAdminssion && this.nameOfSchool === nameOfSchool) {
			return true;
		}
	}
	getYearOfAdminssion(name) {
		if (this.name === name) {
			return this.dateOfAdminssion;
		}
	}
	getStudentInfo(name) {
		if (this.name === name) {
			return {
				'name':this.name,
				'dateOfAdminsion': this.dateOfAdminssion,
				'nameOfSchool':this.nameOfSchool,
				'durationOfStudy': this.durationOfStudy
			}
		}
	}
	graduate(name, currentYear) {
		if(this.name === name) {
			return this.expectedToGraduate - currentYear;
		}

	}
} 