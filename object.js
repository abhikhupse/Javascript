// let o2 = new Object(undefined)
// console.log(o2)
// let o3 = new Object(null)
// console.log(o3)

// let Car = new Object();
// Car.brand = 'Maruti'
// Car.color = 'Black'
// Car.fuel = 'CNG'
// console.log(Car)

// const newcar = {
//     brand: 'Maruti',
//     color: 'Black',
//     fuel: 'CNG'
// }

// console.log(newcar.brand)
// newcar ['seat'] = '4'
// console.log(newcar)

// const newcar = {
//     brand: 'Maruti',
//     color: 'Black',
//     fuel: 'CNG',

// type: {
//     small : ' Hatchback',
//     med : 'Seaden',
//     large : 'Sav'
// }
// }
// console.log(newcar.type.large)
// console.log(newcar['type'])

// function Bike(make,model,year,owner)
// {
//     this.make = make
//     this.model = model
//     this.year = year
//     this.owner = owner
// }
// console.log(Bike(12,"Honda",2001,"me"))
// console.log(make)


// let person ={
//     firstName : 'Abhi',
//     lastName : 'Khupse',
//     middleName : 'P',
//     Age : 20
// }
// let {firstName,lastName,middleName,Age}= person
// console.log(Age)
// let b = lastName
// console.log(firstName)
// console.log(typeof(firstName))
// console.log(b)

// var person = {
//     personName : 'Abhi',
//     birthday:
//     function() {
//         return "Happy Birthday"
//     }
// }
// console.log(person.birthday())


// THIS OBJECT

// var person = {
//     personName : 'Abhi',
//     birthday:
//     function() {
//         console.log(this)
//         return `Happy Birthday to ${person.personName}`
//     }
// }
// console.log(person.birthday())

// FOR IN OBJECT

// var student = {
//     studentName : 'Scott',
//     email : 'scott@gmail.com',
//     branch : 'CS',
//     physics : 60,
//     chemistry : 50,
//     math : 80
// }
// // for (let prop in student){
// //     console.log(prop,'-',student[prop])

// //     if(prop == "Physics"|| prop == "Chemistry"|| prop == "Math") {
// //         student[prop]= student[prop]+4
// //     }
// //     console.log(student)
// // }

// OBJECT DESTRUCTING IN FUNCTION (FUNCTION DESTRUCTING)

// var fun1 = function ({student : sn , email : em , datebirth ,...others}){
//     // console.log("Fun1",sn,em)
//     console.log(others,others.phone,others.city)
//     console.log(datebirth)
// }
// var student = {student : "Scoutt", email : "scoutt@gmail.com", phone : "1234567890",city : "Surat"}
// fun1(student)

// var student = {}

// student.marks = 50
// student.getResult = function(){
//     if (this.marks > 35)
//     return "Pass"
//     else "Fail"
// }
// // console.log(student)
// console.log(student.marks)
// console.log(student.getResult())


var employee = {
    firstName: "Smith",
    lastName: "John",
    designation: "Clerk",
    salary: 3000,
    workExperienceYears: 4,
  
  
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  
  
    promote: function () {
      var isEligibleForPromotion;
      if (this.designation == "Clerk") {
        if (this.workExperienceYears >= 3) {
          isEligibleForPromotion = true;
          this.designation = "Asst. Manager";
          this.salary += this.salary * 10 / 100;
        }
        else {
          isEligibleForPromotion = false;
        }
      }
  
      //Asst. Manager to Manager
      else if (this.designation == "Asst. Manager") {
        if (this.workExperienceYears >= 5) {
          isEligibleForPromotion = true;
          this.designation = "Manager";
          this.salary += this.salary * 20 / 100;
        }
        else {
          this.isEligibleForPromotion = false;
        }
      }
  
      return isEligibleForPromotion;
    }
  };
  
  //console.log(employee);
  
  console.log(employee.firstName);
  console.log(employee.lastName);
  console.log(employee.designation);
  console.log(employee.salary);
  console.log(employee.workExperienceYears);
  
  console.log(employee.getFullName());
  if (employee.promote() == true) {
    console.log("Congratulations! The Employee Promoted.");
    console.log("Updated Salary: " + employee.salary);
    console.log("Updated Designation: " + employee.designation);
  }
  else {
    console.log("Employee is not eligible.");
  }