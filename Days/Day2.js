// Primitive Data Types:
// 1. String : A String in JavaScript is a series of characters that are surrounded by quotes. There are three types of quotes in JavaScript, which are.

let s1 = "Hello There";
console.log(s1); 

let s2 = 'Single quotes work fine';
console.log(s2); 

let s3 = `can embed ${s1}`;
console.log(s3);


// 2. Number 
let n1=10;
let age =20;
console.log(n1);
console.log(age);

// 3. Boolean
let isLoggedIn= true;
let isLoggedOut= false;
console.log(isLoggedIn);
console.log(isLoggedOut);

//4. Null
let n2=null;
console.log(n2);

//5. Undefined
let n3;
console.log(n3);

//6. Symbol
let sym1=Symbol("sym1");
let sym2=Symbol("sym1");
console.log(sym1);
console.log(sym2);
console.log(sym1===sym2); //false because each symbol is unique even if they have the same description.

//7. BigInt
let bigInt1=12345678910111213n; // The 'n' at the end indicates that this is a BigInt.
console.log(bigInt1);


// Non Primitive Data Types:

// 1. Object
let person={
    name:"Jhon",
    age:30,
    isStudent:true
};
console.log(person);

// 2. Array
let arr=[1,2,3,4,5,];
console.log(arr);

//3. Function
function greet(name){
    return `Hello ${name}`;
}
console.log(greet("Alice"));

//4. Date Object
let currentDate = new Date();
console.log(currentDate);

//5. RegExp Object
let regex = /ab+c/;
console.log(regex);

