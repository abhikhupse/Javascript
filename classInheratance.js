//class inheritance

class Teacher {
    teacherName
    school
    // constructor() { }
    constructor(teacherName, school) {
      this.teacherName = teacherName;
      this.school = school;
    }
    // constructor(teacherName) {
    //   this.teacherName = teacherName;
    // }
  }
  //child class
  class PhysicsTeacher extends Teacher {
    mainSubject;
  
    constructor(mainSubject, tech_name, sch) {
      super(tech_name, sch);
      this.mainSubject = mainSubject;
    }
  
    getDetails() {
      return `Teacher Name: ${this.teacherName} and ${this.school}, Main Subject: ${this.mainSubject}`;
    }
  }
  //parent class
  // var teacher = new Teacher("Scott");
  // console.log(teacher);
  
  //child class
  var physicsTeacher = new PhysicsTeacher("Physical Sciences", "Allen", "skill");
  // console.log(physicsTeacher);
  console.log(physicsTeacher.getDetails());