//Arithmetic Operations

//operamds (values, variables, etc)
//operators (+ - * / %)

let number = 20;

document.getElementById('p1').innerHTML = `++${number} = ${++number}`;
document.getElementById('p2').innerHTML = `--${number} = ${--number}`;
document.getElementById('p3').innerHTML = `${number} + 10 = ${number + 1}`;
document.getElementById('p4').innerHTML = `${number} - 5 = ${number - 1}`;
document.getElementById('p5').innerHTML = `${number} * 2 = ${number * 2}`;
document.getElementById('p6').innerHTML = `${number} / 2 = ${number / 2}`;
document.getElementById('p7').innerHTML = `${number} % 3 = ${number % 3}`;
document.getElementById('p8').innerHTML = `${number} ** 2 = ${number ** 2}`;

/*
    operator precedence
    1. parenthesis
    2. exponents
    3. multiplication & division
    4. addition & subtraction

*/