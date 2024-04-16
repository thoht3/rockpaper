
const options = ["Rock", "Paper", "Scissor"];
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * options.length);
    return options[computerChoice];
}

// console.log(getComputerChoice());
let score = 0;
function playOneRound() {
    let computerOption = getComputerChoice().toLowerCase();
    let playerOption = prompt("Rock, paper hay Scissor mày chọn đi?").toLowerCase();
    console.log("The computer played " + computerOption + ".");
    switch (playerOption) {
        case "rock": {
            switch (computerOption) {
                case "rock":
                    console.log("You are tied!");
                    break;
                case "paper":
                    console.log("Rock are lost to paper!");
                    score--;
                    break;
                case "scissor":
                    console.log("Rock wins against scissor!");
                    score++;
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
                    break;
                case "paper":
                    console.log("You are tied!");
                    break;
                case "scissor":
                    console.log("Paper are lost to scissor!");
                    score--;
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
                    break;
                case "paper":
                    console.log("Scissor wins against paper!");
                    score++;
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
            console.log('${playerOption} is not the right option!');
    }
    return score;
}

function playGame () {
    let totalScore = 0;
    playOneRound();
    console.log("Current score: " + score + ".");
    playOneRound();
    console.log("Current score: " + score + ".");
    playOneRound();
    console.log("Current score: " + score + ".");
    playOneRound();
    console.log("Current score: " + score + ".");
    playOneRound();
    console.log("Final score: " + score + ".");
}

playGame();