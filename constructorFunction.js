//constructor functions
var createEmployee = function (employeeName, employeeId, salary) {
    var employee = {};
  
    employee.employeeName = employeeName;
    employee.employeeId = employeeId,
      employee.salary = salary;
  
    employee.getEmployeeName = function () {
      return this.employeeName;
    };
    return employee;
  };
  let square = function (n) { console.log("inside function", this); return n * n }
  console.log(square(4))
  // console.log(createEmployee)
  
  var employee1 = createEmployee("Scott", 1, 1000);
  // var employee2 = createEmployee("Allen", 2, 2000);
  
  console.log(employee1.getEmployeeName());
  // console.log(employee2);