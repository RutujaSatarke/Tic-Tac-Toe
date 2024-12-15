let currentPlayer = "O";
let game = true;
let board = Array(9).fill(null); 
let winnerDisplay = document.getElementById("winner");


document.querySelectorAll(".container div").forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(cell, index));
});


function handleCellClick(cell, index) {
    if (!game || board[index]) return; 
   
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    
    if (checkWinner()) {
        winnerDisplay.textContent = `${currentPlayer} is the winner!`;
        game = false;
    } else if (board.every(cell => cell)) {
        winnerDisplay.textContent = "It's a draw!";
        game = false;
    } else {
        currentPlayer = currentPlayer === "O" ? "X" : "O";
    }
}


function checkWinner() {
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

    return winningCombinations.some(combination =>
        combination.every(index => board[index] === currentPlayer)
    );
}


function restartGame() {
    board.fill(null); 
    document.querySelectorAll(".container div").forEach(cell => (cell.textContent = ""));
    currentPlayer = "O"; 
    game = true; 
    winnerDisplay.textContent = "";


document.getElementById("restart").addEventListener("click", restartGame);
}
