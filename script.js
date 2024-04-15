let buttons = document.querySelectorAll(".btn");
let resetButton = document.querySelector(".reset");
let newGameButton = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");


let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (turnO) {
            button.innerText = "O";
            turnO = false;
        } else {
            button.innerText = "X";
            turnO = true;
        }
        button.disabled = true;

        checkWinner();
    });
});

const disableButton = () => {
    for (let button of buttons) {
        button.disabled = true;
    }
}
const enableButton = () => {
    for (let button of buttons) {
        button.disabled = false;
        button.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableButton();
}
const checkWinner = () => {

    for (let pattern of winPatterns) {
        let pos1Val = buttons[pattern[0]].innerText;
        let pos2Val = buttons[pattern[1]].innerText;
        let pos3Val = buttons[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}
const resetGame = () => {
    turnO = true;
    enableButton();
    msgContainer.classList.add("hide");
}
resetButton.addEventListener("click", () => {
    resetGame();
});

const newGame = () => {
    turnO = true;
    enableButton();
    msgContainer.classList.add("hide");
}


newGameButton.addEventListener("click", () => {
    newGame();
});
let count = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        count++;
        console.log(count);
        if (count % 2 == 0) {
            button.style.color = "#5F5449";

        }
        else {
            button.style.color = "black";
        }

    });
});

