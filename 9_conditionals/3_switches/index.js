let grade = "A";
let numGrade = 36;
const letterGrade = document.getElementById("grade");
const numericGrade = document.getElementById("numericGrade");

switch (grade) {
    case "A":
        letterGrade.innerHTML = "A - Awesome!";
        break;
    case "B":
        letterGrade.innerHTML = "B - not Bad";
        break;
    case "C":
        letterGrade.innerHTML = "C - Cool beans, bro";
        break;
    case "D":
        letterGrade.innerHTML = "D - Downgrade, but ok";
        break;
    case "F":
        letterGrade.innerHTML = "Fuuuuuh";
        break;
    default:
        letterGrade.innerHTML = "I don't recognize this grade";
        break;
};

switch (true) {
    case (numGrade == 100):
        numericGrade.innerHTML = "Maximum score";
        break;
    case (numGrade >= 90):
        numericGrade.innerHTML = "High score";
        break;
    case (numGrade >= 80):
        numericGrade.innerHTML = "Good score";
        break;
    case (numGrade >= 70):
        numericGrade.innerHTML = "Decent score";
        break;
    case (numGrade >= 60):
        numericGrade.innerHTML = "You passed. Barely.";
        break;
    case (numGrade < 60):
        numericGrade.innerHTML = "YOU\nSHALL NOT\nPASS!";
        break;
    default:
        numericGrade.innerHTML = "I don't recognize this value.";
        break;
};