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

    if (round5.checked) {
        round10.classList.add("hide");
        round15.classList.add("hide");
        round20.classList.add("hide");
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

function rockClick() {

}
function scisorClick() {

}