const round5 = document.getElementById("five");
const round10 = document.getElementById("ten");
const round15 = document.getElementById("fifteen");
const round20 = document.getElementById("twenty");
const countUp = document.getElementById("countUp");
const score = document.getElementById("score");
const comments = document.getElementById("comments");
const results = document.getElementById("results");
let countRound = 0;
let userScore = 0;
let computerScore = 0;

function checkEnd() {
    if (round5.checked) {
        endOfRound(round5);
    } else if (round10.checked) {
        endOfRound(round10);
    } else if (round15.checked) {
        endOfRound(round15);
    } else {
        endOfRound(round20);
    }
}
function play() {
    hideElements();
    countRound = countRound + 1;
    countUp.innerHTML = `${countRound} / ${round5.value} Rounds`;
    checkEnd();
}

function whichRound() {
    if (round5.checked || round10.checked || round15.checked || round20.checked) {
        play();
    } else {
        checkEnd();
        restart();
        countUp.innerHTML = "Choose how many rounds you want to play!"
    }
}

function handClick() {
    score.innerHTML = `${userScore} : ${computerScore}`;
    comments.innerHTML = `User: Paper, `;
    comments.style.color = "white";
    comments.style.fontSize = "1.5em";
    //computerMove
    let saveRandomNum = Math.floor(Math.random() * 100) + 1;
    // console.log(saveRandomNum);
    // console.log(typeof saveRandomNum);
    switch (saveRandomNum % 3) {
        case 0:
            comments.innerHTML += ` Computer: Paper,  No Winner!!`;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            console.log(saveRandomNum + "case0");
            break;

        case 1:
            comments.innerHTML += ` Computer: Rock,  You lose!!`;
            computerScore += 1;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            console.log(saveRandomNum + "case1")
            break;
        case 2:
            comments.innerHTML += ` Computer: Scisors,  You lose!!`;
            computerScore += 1;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();

            console.log(saveRandomNum + "case2");
            break;
    }
    whichRound();

}

function rockClick() {
    score.innerHTML = `${userScore} : ${computerScore}`;
    comments.innerHTML = `User: Rock, `;
    comments.style.color = "white";
    comments.style.fontSize = "1.5em";
    //computerMove
    let saveRandomNum = Math.floor(Math.random() * 50) + 1;
    // console.log(saveRandomNum);
    // console.log(typeof saveRandomNum);
    switch (saveRandomNum % 3) {
        case 0:
            comments.innerHTML += ` Computer: Paper,  You win!!`;
            userScore += 1;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            console.log(saveRandomNum + "case0")
            break;

        case 1:
            comments.innerHTML += ` Computer: Rock,  No Winner!!`;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            console.log(saveRandomNum + "case1")
            break;
        case 2:
            comments.innerHTML += ` Computer: Scisors,  You win!!`;
            userScore += 1;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            console.log(saveRandomNum + "case2");
            break;
    }
    whichRound();
}

function scisorClick() {
    score.innerHTML = `${userScore} : ${computerScore}`;
    comments.innerHTML = `User: Scisors, `;
    comments.style.color = "white";
    comments.style.fontSize = "1.5em";
    //computerMove;
    let saveRandomNum = Math.floor(Math.random() * 50) + 1;
    // console.log(saveRandomNum);
    // console.log(typeof saveRandomNum);
    switch (saveRandomNum % 3) {
        case 0:
            comments.innerHTML += ` Computer: Paper,  You win!!`;
            userScore += 1;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            // console.log(saveRandomNum + "case0")
            break;

        case 1:
            comments.innerHTML += ` Computer: Rock, You lose!!`;
            computerScore += 1;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            // console.log(saveRandomNum + "case1")
            break;
        case 2:
            comments.innerHTML += ` Computer: Scisors,  No Winner!!`;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            // console.log(saveRandomNum + "case2");
            break;
    }
    whichRound();
}

function endOfRound(round) {
    // console.log(countRound.toString() + typeof countRound.toString());
    // console.log(round.value + typeof round.value);
    if (countRound.toString() == round.value) {
        // console.log("round ende");
        if (userScore > computerScore) {
            // console.log("comp wins");
            comments.innerHTML = `Well done you are the winner!!
            Score ${userScore} : ${computerScore}`;
            comments.style.color = "red";
            comments.style.fontSize = "2.5em";
            restart();

        } else if (userScore == computerScore) {
            // console.log("you win");
            comments.innerHTML = `The round was very tight, no Winner!!
            Score ${userScore} : ${computerScore}`;
            comments.style.color = "red";
            comments.style.fontSize = "2.5em";
            restart();
        } else {
            // console.log("no one wins");
            comments.innerHTML = `Computer won this round,
            but you should try again!!
            Score ${userScore} : ${computerScore}`;
            comments.style.color = "red";
            comments.style.fontSize = "2.5em";
            restart();
        }

    }
}
function restart() {
    countRound = 0;
    userScore = 0;
    computerScore = 0;
    score.innerHTML = `${userScore} : ${computerScore}`;
}

function hideElements() {
    var x, i, y;
    x = document.querySelectorAll(`label`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    y = document.querySelectorAll(`input`);
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
}