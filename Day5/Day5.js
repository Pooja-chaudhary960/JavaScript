// 1. Normal Function: Functions are block of code designed to 
// perform specific task.
let n1,n2;
function addNum(n1,n2){
    return n1+n2;
}
console.log(addNum(10,20));

//2. Arrow Function: Arrow functions are allow a shorter syntax for function expressions.
const multiply = (a,b)=> a*b;
console.log(multiply(10,20));

// constructor function: Constructor functions are used to create 
// objects and are defined using the function keyword.
function Person(firstName, lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); 
}
// Create an instance of the Person constructor function
const person1 = new Person('John', 'Doe', '1990-01-01');
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.dob);
