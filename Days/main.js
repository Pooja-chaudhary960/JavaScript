console.log("Hello world");

var x=5;
var x=10; // Re-deceleration allowed
x=30; //Re-assignment allowed
console.log(x);

let y=10;
//let y=20; // Re-deceleration not allowed
y=40; // Re-assignment allowed
console.log(y);

const z=25;
//z=10; // Re-assignment not allowed 
console.log(z);
