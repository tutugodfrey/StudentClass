
// create super student class

export class Student {
	constructor(name, dateOfAdminssion, nameOfSchool, ) {
		this.name = name;
		this.dateOfAdminssion = dateOfAdminssion;
		this.nameOfSchool = nameOfSchool;
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
				'nameOfSchool':this.nameOfSchool
			}
		}
	}
} 