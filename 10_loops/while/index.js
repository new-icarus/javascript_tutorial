// while loop - code repetition

let userName = "";
while (userName === "" || userName == null) {
    userName = window.prompt("Enter your name");
}

document.getElementById("greeting").innerHTML = `Hello, ${userName}!`;