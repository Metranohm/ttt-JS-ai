
const squares = document.querySelectorAll('.square');
let currentPlayer = "X";
let gameOver = false;
let board = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkForWin = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

const checkForDraw = () => {
    return board.every((square) => square !== "");
}

const resetGame = () => {
    currentPlayer = "X";
    gameOver = false;
    board = ["", "", "", "", "", "", "", "", ""];
    squares.forEach((square) => {
        square.textContent = "";
    });
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function (e) {
        if (!gameOver && e.target.textContent === "") {
            e.target.textContent = currentPlayer;
            board[i] = currentPlayer;
            const winner = checkForWin();
            if (winner) {
                alert(`Player ${winner} wins!`);
                gameOver = true;
            } else if (checkForDraw()) {
                alert("It's a draw!");
                gameOver = true;
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    });
}

document.querySelector("#reset-btn").addEventListener("click", resetGame);