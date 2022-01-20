

// let fruits = ['Apple', 'Banana', 'kiwi', 'watermelon', 'papaya', 'chicoo', 'grapes', 'df']
// fruits.forEach((a, b, c) => {
//     // console.log(a,b,c)
// })


// let pushele = fruits.push('Orange')
// let popele = fruits.pop();

// let pushele = fruits.unshift('Orange')
// let popele = fruits.shift('red');
// console.log("popele : ", popele)

// let fruits = ['Apple', 'Banana', 'kiwi', 'watermelon', 'papaya', 'chicoo', 'grapes', 'df']
// console.log(fruits)
// console.log(fruits.indexOf("kiwi"))
// let pos = -7
// let n = 4
// let removedItems = fruits.splice(pos, n)
// // this is how to remove items, n defines the number of items to be removed,
// // starting at the index position specified by pos and progressing toward the end of array.

// console.log(removedItems)
// console.log(fruits)

let fruits = ['Apple', 'Banana', 'kiwi', 'watermelon', 'papaya', 'chicoo', 'grapes', 'df']
console.log(fruits.slice(2, 5))      //+ +
console.log(fruits.slice(2, -3))      //+ -
console.log(fruits.slice())      //- +
console.log(fruits.slice(-6, -3))      //- -
console.log(fruits.slice(7, 4))      //- -


// let fruits = ['Apple', 'ananas', 'Avocado', 'Banana', 'kiwi', 'watermelon', 'papaya', 'chicoo', 'grapes', 'df']
// let numarray = [2, 31, 333, 223, 22, 65, 76, 44, 45, 44445, 4, 86, 43, 34, 46, 68, 12, 14, 66, 78]
// let numarray1 = [2, 31, 34, 12, 14]

// console.log(numarray.includes(2));
// console.log(fruits.includes('kiwi'));
// console.log(fruits.includes('berries'));

// // console.log(numarray.sort())
// console.log(fruits.sort((a, b) => {
//     console.log(a, " - ", b, " - ", a - b)
//     return a - b
// }))


// const check = (param) => param < 40;
// const check = function (param) {

//     console.log(param)
//     return param < 40
// }
// console.log(numarray1.every(check));

// const result = fruits.filter(fruit => fruit.length < 5);
// console.log(result);

// console.log(fruits.filter((ele, index, array) => console.log(index, " - ", ele, " - ")))

// console.log(numarray1);
// const map1 = numarray1.map(x => x * 2);
// console.log(map1);

// function reducer(previous, current, index, array) {
//     const returns = previous + current;
//     console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
//     return returns;
// }
// console.log(numarray1.reduce(reducer));

// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// console.log(numarray1.reduce(reducer));
// console.log(array1.reduce(reducer, 5));

//// 4/01


// Spread syntax (...)
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// let movements_deposit = [200, 450, 3000, 70, 1300];
// let movements_withdra = [-400, -650, -130];
// const amt = [1200,950]

// let movements = [...movements_deposit, ...movements_withdra]
// let newarray = movements
// console.log(movements)

// function sum(x, y, z, a) {
//     console.log(x, " - ", y, " - ", z, " - ", a);
//     // return x + y;
// }

// const numbers = [1, 2, 3];
// sum(200, ...numbers)


// let numberStore = [0, 1, 2];
// let newNumber = 12;
// numberStore = [23, 43, 54, ...numberStore, newNumber];
// console.log(numberStore)

// console.log(sum(...numbers));

// Maximum value
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const max = movements.reduce((acc, mov) => {
//     if (acc > mov) return acc;
//     else return mov;
// }, movements[0]);
// console.log(max);

// array destructuring

// let x = 10, y = 20;
// [x, y] = [y, x];
// console.log("x : ", x);
// console.log("y : ", y);

// function result(m1, m2, m3) {
//     return [
//         m1 + m2 + m3,
//         (m1 + m2 + m3) / 3,
//     ]
// }
// console.log(result(43, 54, 65))
// let [total, percentage] = result(43, 54, 65);
// console.log(total, " - ", percentage);

// function getMarks() {
//     return [34, 54, 65, 54, 65]
// }
// let marks = getMarks();
// console.log(marks);

// let [...m4] = getMarks();
// console.log("m1 ", m1);
// console.log("m2 ", m2);
// console.log("m3 ", m3);
// console.log("m4 ", m4);

//// 5/01/22

// Looping Arrays: forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (i of movements)
// //     console.log(i);

// for (const [i, movement] of movements.entries())
//     console.log(i + "  - " + movement);

// for (const [i, movement] of movements.entries()) {

//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// }

// console.log('---- FOREACH ----');
// movements.forEach(function (mov, i, arr) {
//     if (mov > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//     }
// });



// ----------------------------------------------------------------------------------------


// forEach With Maps and Sets
// Map
// const movements = [200, 450, 400, 3000, 650, 130, 70, 1300];
// const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//     return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements)
//     movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movementsDescriptions = movements.map(
//     (mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );
// console.log(movementsDescriptions);

// const arr1 = [0, 1, 2, [3, 4, 5, [6, 7]]];

// console.log(arr1.flat(-1));
// expected output: [0, 1, 2, 3, 4]

// const arr2 = [0, 1, 2, [[[3, 4]]]];

// console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]


// const birthday = new Date('June 13, 08 04:20');
// // console.log(birthday.getMonth());
// let date = new Date();
// console.log(date);


// const str1 = 'skill qode';

// console.log(str1.padEnd(-3, '-'));
// console.log(str1.padStart(-3, '-'));


// const str2 = '200';

// console.log(str2.padEnd(5));

// const str = 'skill qode the programing lab';
// console.log(str.slice(15, 25));
// console.log(str.slice(-14, 25));
// console.log(str.slice(11, -15));

///------------------------------------------------------------------------------
//// Object 10/01/22
///------------------------------------------------------------------------------
// let o1 = Object();
// console.log(o1);
// console.log(typeof (o1));
// var a
// var b = ''
// console.log(a)//undefine
// console.log(b)//null

// let o2 = new Object(undefined);
// console.log(o2);
// let o3 = new Object(null);
// console.log(o3);

// let car = new Object();
// car.brand = "maruti";
// car.color = "black";
// car.fueltype = "CNG";
// console.log(car);
// { brand: 'maruti', color: 'black', fueltype: 'CNG' }

// const newcar = {
//     brand: 'maruti',
//     color: 'black',
//     fueltype: 'CNG'
// }
// console.log(newcar['brand']);
// console.log(newcar.brand);
// newcar['seat'] = '4';
// const newcar = {
//     brand: 'maruti',
//     color: 'black',
//     fueltype: 'CNG',
//     type: {
//         small: 'hatchback',
//         med: 'seadan',
//         larg: 'suv'
//     }
// }

// console.log(newcar.type.larg);
// console.log(newcar['type']['larg']);

// function Bike(make, model, year, owner) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
//     this.displayCar = displayCar;
//   }

//   console.log(Bike);

// var o = {
//     a: 7,
//     get b() {
//       return this.a + 1;
//     },
//     set c(x) {
//       this.a = x / 2;
//     }
//   };
// console.log(o)  ;

//    console.log(o.b); 
//    o.c = 50;         
//    console.log(o.a); 
//   console.log(o.b); 


// 11/01/22
//---------------------------------------------------------------------------
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     middleName: 'C.',
//     currentAge: 28
// };

// let { firstName, lastName, middleName, currentAge: age = 18 } = person;

// console.log(middleName); // 'C.'
// console.log(age); // 28
// let b = person;

// console.log(firstName)
// console.log(typeof (firstName))
// console.log(b)
// function getPerson() {
//     return null;
// }
// let { firstName, lastName } = getPerson();
// let { firstName, lastName } = getPerson() || {};

// console.log(firstName, lastName);

// let employee = {
//     id: 1001,
//     name: {
//         firstName: 'John',
//         lastName: 'Doe',
//         age: '28',
//         address: {
//             city: 'Surat',
//             state: 'Gujarat',
//             country: 'india'
//         }
//     }
// };

// let {
//     name: {
//         firstName,
//         lastName
//     }
// } = employee;

// let { lastName, firstName: name, ...rest } = employee.name;
// let { city, state } = employee.name.address
// console.log(city)
// // console.log(state)
// console.log(typeof (rest))
// console.log(name); // John
// console.log(lastName); // Doe