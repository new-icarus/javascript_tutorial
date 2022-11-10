let userName;

do {
    userName = window.prompt("Enter  your name");
} while (userName === "" || userName === null);

document.getElementById("greeting").innerHTML = `Hello, ${userName}!`;