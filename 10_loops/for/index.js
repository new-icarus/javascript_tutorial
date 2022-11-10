//FOR LOOP - repeat some code a certain amount of time

document.getElementById("start").onclick = function () {
    for (let counter = 1; counter <= 10; counter++) {
        document.getElementById(`${counter}`).innerHTML = `Hey! this is a counter. Nmbr ${counter}`;
    }
};

document.getElementById("clear").onclick = function () {
    for (let counter = 1; counter <= 10; counter++) {
        document.getElementById(`${counter}`).innerHTML = "";
    }
};