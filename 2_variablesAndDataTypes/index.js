// VARIABLE: container for storing data

//Two steps:
//1. Declaration (var, let, const)
//2. Assignment (= assignment operator)

let firstName = 'Tiago'; //strings
let age = 29; //numbers
let student = true; //booleans

//birthday
age++;

console.log('Hello', firstName);
console.log('Age:', age);
console.log('enrolled:', student);

document.getElementById('p1').innerHTML = 'Hello ' + firstName;
document.getElementById('p2').innerHTML = 'Your age is ' + age;
document.getElementById('p3').innerHTML = 'Enrolled: ' + student;