/* 
    Type Conversion
    changing the datatype of a value to another
*/
let age;

document.getElementById('submitButton').onclick = function () {
    age = document.getElementById('age').value;

    console.log(typeof age);
    console.log(typeof Object(age));
    console.log(typeof Number(age));
    console.log(typeof Boolean(age));

    age = Number(age);

    document.getElementById('p1').innerHTML = `Next year you will be ${age += 1} years old.`;
}