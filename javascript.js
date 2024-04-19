
const options = ["Rock", "Paper", "Scissor"];
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * options.length);
    return options[computerChoice];
}

// console.log(getComputerChoice());
let score = 0;
let computerScore = 0;
function playOneRound(option) {
    let computerOption = getComputerChoice().toLowerCase();
    // let playerOption = prompt("Rock, paper hay Scissor mày chọn đi?").toLowerCase();
    console.log("The computer played " + computerOption + ".");
    switch (option) {
        case "rock": {
            switch (computerOption) {
                case "rock":
                    console.log("You are tied!");
                    break;
                case "paper":
                    console.log("Rock are lost to paper!");
                    score--;
                    computerScore++;
                    break;
                case "scissor":
                    console.log("Rock wins against scissor!");
                    score++;
                    computerScore--;
                    break;
                default:
                    console.log(" is not the right option!");
            }
            break;
        }
        case "paper": {
            switch (computerOption) {
                case "rock":
                    console.log("Paper wins against rock!");
                    score++;
                    computerScore--;
                    break;
                case "paper":
                    console.log("You are tied!");
                    break;
                case "scissor":
                    console.log("Paper are lost to scissor!");
                    score--;
                    computerScore++;
                    break;
                default:
                    console.log(" is not the right option!");
            }
            break;
        }
        case "scissor": {
            switch (computerOption) {
                case "rock":
                    console.log("Scissor are lost to rock!");
                    score--;
                    computerScore++;
                    break;
                case "paper":
                    console.log("Scissor wins against paper!");
                    score++;
                    computerScore--;
                    break;
                case "scissor":
                    console.log("You are tied!");
                    break;
                default:
                    console.log(" is not the right option!");
            }
            break;
        }
        default:
            // console.log(`${option.value} is not the right option!`);
    }
    return score;
}

// function playGame () {
//     let totalScore = 0;
//     playOneRound();
//     console.log("Current score: " + score + ".");
//     playOneRound();
//     console.log("Final score: " + score + ".");
// }

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

function checkWinner () {
    if (score == 5) {
        console.log("You are the final winner!!");
        score = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        console.log("Computer is the final winner!");
        score = 0;
        computerScore = 0;
    }
}

rock.addEventListener("click", () => {
    playOneRound("rock");
    console.log(rock.textContent + " results score: " + score);
    console.log("Computer score: " + computerScore);
    checkWinner();
});
paper.addEventListener("click", () => {
    playOneRound("paper");
    console.log(paper.textContent + " results score: " + score);
    console.log("Computer score: " + computerScore);

    checkWinner();
});
scissor.addEventListener("click", () => {
    playOneRound("scissor");
    console.log(scissor.textContent + " results score: " + score);
    console.log("Computer score: " + computerScore);

    checkWinner();
});