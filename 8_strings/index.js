// string properties & methods

let userName = " Tiagoo ";
let phoneNumber = "123-456-7890";

userName = userName.trim(); //remove whitespaces before and after
console.log(userName.length); //6
console.log(userName.charAt(0)); //T
console.log(userName.indexOf("o")); //4
console.log(userName.lastIndexOf("o")); //5
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(phoneNumber.replaceAll("-", ""));

let fullName = "Tiago Macedo Cesar";
let firstName;
let lastName;

lastName = fullName.slice(13);
console.log(lastName);

firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);

//method chaining

console.log(fullName.toUpperCase().replaceAll("E", "3").replaceAll("A", "4").replaceAll("I", "1").replaceAll("O", "0"));