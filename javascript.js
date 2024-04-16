
const options = ["Rock", "Paper", "Scissor"];
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * options.length);
    return options[computerChoice];
}

// console.log(getComputerChoice());

function playOneRound() {
    const computerOption = getComputerChoice().toLowerCase();
    const playerOption = prompt("Rock, paper hay Scissor mày chọn đi?").toLowerCase();
    console.log("The computer played " + computerOption + ".");
    switch (playerOption) {
        case "rock": {
            switch (computerOption) {
                case "rock":
                    console.log("You are tied!");
                    break;
                case "paper":
                    console.log("Rock are lost to paper!");
                    break;
                case "scissor":
                    console.log("Rock wins against scissor!");
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
                    break;
                case "paper":
                    console.log("You are tied!");
                    break;
                case "scissor":
                    console.log("Paper are lost to scissor!");
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
                    break;
                case "paper":
                    console.log("Scissor wins against paper!");
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
}

playOneRound()