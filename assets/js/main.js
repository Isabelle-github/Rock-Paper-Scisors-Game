const round5 = document.getElementById("five");
const round10 = document.getElementById("ten");
const round15 = document.getElementById("fifteen");
const round20 = document.getElementById("twenty");
const countUp = document.getElementById("countUp")
let countRound = 0;

function handClick() {
    // open hand was cliked. display the countUp of corresponding round
    // add +1 on the count up each time the user clicked
    // hide all oder round radio buttons
    document.getElementById("round").classList.add("hide");

    if (round5.checked) {
        round10.classList.add("hide");
        round15.classList.add("hide");
        round20.classList.add("hide");
        hideFunction(label);
        countRound = countRound + 1;
        countUp.innerHTML = `${countRound} / ${round5.value}`;
    } else if (round10.checked) {
        round5.classList.add("hide");
        round15.classList.add("hide");
        round20.classList.add("hide");
        countRound = countRound + 1;
        countUp.innerHTML = `${countRound} / ${round10.value}`;
    } else if (round15.checked) {
        round5.classList.add("hide");
        round10.classList.add("hide");
        round20.classList.add("hide");
        countRound = countRound + 1;
        countUp.innerHTML = `${countRound} / ${round15.value}`;
    } else if (round20.checked) {
        round5.classList.add("hide");
        round10.classList.add("hide");
        round15.classList.add("hide");
        countRound = countRound + 1;
        countUp.innerHTML = `${countRound} / ${round20.value}`;
    } else {
        countUp.innerHTML = "Choose how many rounds you want to play!"
    }
}

function computerMove() {
    switch (saveRandomNum % 3) {
        case 0:

            break;

        case 1:
            break;
        default:
            break;
    }
}
function userMove() {

}
function restart() {

}
// Math.floor rundet ab
// Math.random erstellt eine zufällige Zahl zwischen 0 - 1
console.log(Math.floor(Math.random() * 10) + 1) // Zahl zwischen 1 - 10
console.log(Math.floor(Math.random() * 11)) // Zahl zwischen 0 - 10


let saveRandomNum = () => {
    return Math.floor(Math.random() * 50) + 1
}

function hideFunction(tag) {
    var x, i;
    x = document.querySelectorAll(`${tag}`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}