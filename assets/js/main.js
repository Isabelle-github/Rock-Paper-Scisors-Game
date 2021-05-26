const round5 = document.getElementById("five");
const round10 = document.getElementById("ten");
const round15 = document.getElementById("fifteen");
const round20 = document.getElementById("twenty");
const countUp = document.getElementById("countUp");
const score = document.getElementById("score");
const comments = document.getElementById("comments");
const results = document.getElementById("results");
const history = document.getElementById("history");
let gameHistory = [];

let countRound = 0;
let userScore = 0;
let computerScore = 0;
score.innerHTML = `${userScore} : ${computerScore}`;

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
    if (round5.checked) {
        hideElements();
        countRound = countRound + 1;
        countUp.innerHTML = `${countRound} / ${round5.value} Rounds`;
        checkEnd();
    } else if (round10.checked) {
        hideElements();
        countRound = countRound + 1;
        countUp.innerHTML = `${countRound} / ${round10.value} Rounds`;
        checkEnd();
    } else if (round15.checked) {
        hideElements();
        countRound = countRound + 1;
        countUp.innerHTML = `${countRound} / ${round15.value} Rounds`;
        checkEnd();
    } else {
        hideElements();
        countRound = countRound + 1;
        countUp.innerHTML = `${countRound} / ${round20.value} Rounds`;
        checkEnd();
    }

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
    history.classList.add("hide");
    let round = {};
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
            round.userMove = "Paper";
            round.compMove = "Paper";
            gameHistory.push(round);
            comments.innerHTML += ` Computer: ${round.compMove},  No Winner!!`;
            score.innerHTML = `${userScore} : ${computerScore}`;

            //checkEnd();
            //console.log(saveRandomNum + "case0");
            break;

        case 1:
            round.userMove = "Paper";
            round.compMove = "Rock";
            gameHistory.push(round);
            comments.innerHTML += ` Computer: ${round.compMove},  You win!!`;
            userScore += 1;
            score.innerHTML = `${userScore} : ${computerScore}`;

            //checkEnd();
            //console.log(saveRandomNum + "case1")
            break;
        case 2:
            round.userMove = "Paper";
            round.compMove = "Scisors";
            gameHistory.push(round);
            comments.innerHTML += ` Computer: ${round.compMove},  You lose!!`;
            computerScore += 1;
            score.innerHTML = `${userScore} : ${computerScore}`;
            //checkEnd();

            //console.log(saveRandomNum + "case2");
            break;
    }
    whichRound();
    console.log(gameHistory);

}

function rockClick() {
    history.classList.add("hide");
    let round = {};
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
            round.userMove = "Rock";
            round.compMove = "Paper";
            gameHistory.push(round);
            comments.innerHTML += ` Computer: ${round.compMove},  You lose!!`;
            computerScore += 1;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            //console.log(saveRandomNum + "case0")
            break;

        case 1:
            round.userMove = "Rock";
            round.compMove = "Rock";
            gameHistory.push(round);
            comments.innerHTML += ` Computer: ${round.compMove},  No Winner!!`;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            //console.log(saveRandomNum + "case1")
            break;
        case 2:
            round.userMove = "Rock";
            round.compMove = "Scisors";
            gameHistory.push(round);
            comments.innerHTML += ` Computer: ${round.compMove},  You win!!`;
            userScore += 1;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            //console.log(saveRandomNum + "case2");
            break;
    }
    whichRound();
    console.log(gameHistory);
}

function scisorClick() {
    history.classList.add("hide");
    let round = {};
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
            round.userMove = "Scisors";
            round.compMove = "Paper";
            gameHistory.push(round);
            comments.innerHTML += ` Computer: ${round.compMove},  You win!!`;
            userScore += 1;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            // console.log(saveRandomNum + "case0")
            break;

        case 1:
            round.userMove = "Scisors";
            round.compMove = "Rock";
            gameHistory.push(round);
            comments.innerHTML += ` Computer: ${round.compMove}, You lose!!`;
            computerScore += 1;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            // console.log(saveRandomNum + "case1")
            break;
        case 2:
            round.userMove = "Scisors";
            round.compMove = "Scisors";
            gameHistory.push(round);
            comments.innerHTML += ` Computer: ${round.compMove},  No Winner!!`;
            score.innerHTML = `${userScore} : ${computerScore}`;
            checkEnd();
            // console.log(saveRandomNum + "case2");
            break;
    }
    whichRound();
    console.log(gameHistory);
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
            comments.innerHTML = `The game was very tight, no Winner!!
            Score ${userScore} : ${computerScore}`;
            comments.style.color = "red";
            comments.style.fontSize = "2.5em";
            restart();
        } else {
            // console.log("no one wins");
            comments.innerHTML = `Computer won this game,
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
    showHistory();
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
function showHistory() {
    history.classList.remove("hide");
    gameHistory.forEach((obj) => {
        history.innerHTML += `
            <tr>
                <td>${obj.userMove}</td>
                <td>${obj.compMove}</td>
            </tr>
            `
        console.log(obj.userMove)
        console.log(obj.compMove)
    })
}


