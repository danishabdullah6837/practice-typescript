"use strict";
console.log("Hello World!");
// primitive data types string, number, boolean, null, undefined
// string
let firstName = "Danish";
// firstName = 1235; // assignment error as given variable is a string variable
console.log(firstName);
// number and float is same
let age = 34;
console.log(age);
// boolean
let isMarried = true;
console.log(isMarried);
// null
let temp = null;
console.log(temp);
// undefined
let lastName; // implicit mean system will assume/judge variable type
console.log(lastName);
let myVar; // explicit means we are telling variable type to the system ourself
console.log(myVar);
// template literals or template string new and faster way to deal with string
console.log("My first name is " + firstName); // before // + to concatenate
let myVar2 = "My name is " + firstName; // before
console.log(myVar2);
// now template string specially to use dynamic strings // back tik to create it
console.log(`My first name is ${firstName}. I live in Lahore.`); // dynamic value ${firstName}
// typeof
console.log(typeof firstName); // it will tell typeof of a variable
// Operators (4 types)
// 1 - Arithmetic Operators + - * / %
let n1 = 10;
let n2 = 5;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(n1 ** n2); // power or exponential of a number
// 2 - Comparsion Operators
let n3 = 5;
console.log(n3 == 5); // equal
console.log(n3 === 5); // equal value + type
console.log(n3 != 5); // not equal
console.log(n3 >= 5); // greater than or equal to
console.log(n3 <= 5); // less than or equal to
console.log(n3 > 5); // greater than
console.log(n3 < 5); // less than
// 3 - 
