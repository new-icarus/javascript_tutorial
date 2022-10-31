// easy way: window prompt

/*

    let username = window.prompt("What's your name?");
    document.getElementById('p1').innerHTML = username;

*/

//hard way: HTML textbox
let username;

document.getElementById("myButton").onclick = function () {
    username = document.getElementById('myText').value;
    document.getElementById("p1").innerHTML = "Hey " + username;
};