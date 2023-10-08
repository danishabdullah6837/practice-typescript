console.log("Hello World!")

// primitive data types string, number, boolean, null, undefined

// string
let firstName: string = "Danish";
// firstName = 1235; // assignment error as given variable is a string variable
console.log(firstName)

// number and float is same
let age: number = 34
console.log(age)

// boolean
let isMarried: boolean = true
console.log(isMarried)

// null
let temp: null = null;
console.log(temp);
console.log(typeof temp) // return object, why???

// undefined
let lastName; // implicit mean system will assume/judge variable type
console.log(lastName);

let myVar: undefined; // explicit means we are telling variable type to the system ourself
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
let n1 = 10
let n2 = 5
console.log(n1 + n2); // 15
console.log(n1 - n2); // 5
console.log(n1 * n2); // 50
console.log(n1 / n2); // 2
console.log(n1 % n2); // remaider = 0
console.log(n1 ** n2); // power or exponential of a number // 100000

// 2 - Comparsion Operators
let n3 = 5;
console.log(n3 == 5); // equal // in this case true
console.log(n3 === 5); // equal value + type // true
console.log(n3 != 5); // not equal // false
console.log(n3 >= 5); // greater than or equal to // true
console.log(n3 <= 5); // less than or equal to // true
console.log(n3 > 5); // greater than // false
console.log(n3 < 5); // less than // false

// 3 - Logical Operators and &&, or ||, not !

// and operator && 
// T T = T
// T F = F
// F T = F
// F F = F

// or operator || 
// T T = T
// T F = T
// F T = T
// F F = F

// not operator ! 
// T = F
// F = T

// conditional statement
n1 = 16
if(n1 > 15){
    console.log(firstName)
} else if(n1 == 5){
    console.log(lastName)
} else{
    console.log(age);
}











