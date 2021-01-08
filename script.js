let playerSymbol = "X";

function playerSwitch(){
    if(document.getElementById("title").innerText === "Player X's Turn"){
        document.getElementById("title").innerText = "Player O's Turn";
        playerSymbol = "O";
    } else if (document.getElementById("title").innerText === "Player O's Turn"){
        document.getElementById("title").innerText = "Player X's Turn";
        playerSymbol = "X";
    }
}

function checkForWinner(){
    if(document.getElementById("topLeft").innerText === document.getElementById("topCenter").innerText && document.getElementById("topLeft").innerText === document.getElementById("topRight").innerText && document.getElementById("topLeft").innerText !== "?"){
        playerSymbol = document.getElementById("topLeft").innerText;
        document.getElementById("title").innerText = `Player ${playerSymbol} wins!`;
    } else if(document.getElementById("centerLeft").innerText === document.getElementById("center").innerText && document.getElementById("centerLeft").innerText === document.getElementById("centerRight").innerText && document.getElementById("centerLeft").innerText !== "?"){
        playerSymbol = document.getElementById("centerLeft").innerText;
        document.getElementById("title").innerText = `Player ${playerSymbol} wins!`;
    } else if(document.getElementById("bottomLeft").innerText === document.getElementById("bottomCenter").innerText && document.getElementById("bottomLeft").innerText === document.getElementById("bottomRight").innerText && document.getElementById("bottomLeft").innerText !== "?"){
        playerSymbol = document.getElementById("bottomLeft").innerText;
        document.getElementById("title").innerText = `Player ${playerSymbol} wins!`;
    } else if(document.getElementById("topLeft").innerText === document.getElementById("centerLeft").innerText && document.getElementById("topLeft").innerText === document.getElementById("bottomLeft").innerText && document.getElementById("topLeft").innerText !== "?"){
        playerSymbol = document.getElementById("topLeft").innerText;
        document.getElementById("title").innerText = `Player ${playerSymbol} wins!`;
    } else if(document.getElementById("topCenter").innerText === document.getElementById("center").innerText && document.getElementById("topCenter").innerText === document.getElementById("bottomCenter").innerText && document.getElementById("topCenter").innerText !== "?"){
        playerSymbol = document.getElementById("topCenter").innerText;
        document.getElementById("title").innerText = `Player ${playerSymbol} wins!`;
    } else if(document.getElementById("topRight").innerText === document.getElementById("centerRight").innerText && document.getElementById("topRight").innerText === document.getElementById("bottomRight").innerText && document.getElementById("topRight").innerText !== "?"){
        playerSymbol = document.getElementById("topRight").innerText;
        document.getElementById("title").innerText = `Player ${playerSymbol} wins!`;
    } else if(document.getElementById("topLeft").innerText === document.getElementById("center").innerText && document.getElementById("topLeft").innerText === document.getElementById("bottomRight").innerText && document.getElementById("topLeft").innerText !== "?"){
        playerSymbol = document.getElementById("topLeft").innerText;
        document.getElementById("title").innerText = `Player ${playerSymbol} wins!`;
    } else if(document.getElementById("topRight").innerText === document.getElementById("center").innerText && document.getElementById("topRight").innerText === document.getElementById("bottomLeft").innerText && document.getElementById("topRight").innerText !== "?"){
        playerSymbol = document.getElementById("topRight").innerText;
        document.getElementById("title").innerText = `Player ${playerSymbol} wins!`;
    } else if(document.getElementById("topLeft").innerText !== "?" && document.getElementById("topCenter").innerText !== "?" && document.getElementById("topRight").innerText !== "?" && document.getElementById("centerLeft").innerText !== "?" && document.getElementById("center").innerText !== "?" && document.getElementById("centerRight").innerText !== "?" && document.getElementById("bottomLeft").innerText !== "?" && document.getElementById("bottomCenter").innerText !== "?" && document.getElementById("bottomRight").innerText !== "?"){
        document.getElementById("title").innerText = "It's a draw!";
    }
}

function addSymbol(event){
    if(event.currentTarget.innerText !== "X" && event.currentTarget.innerText !== "O" && document.getElementById("title").innerText === "Player X's Turn" || document.getElementById("title").innerText === "Player O's Turn"){
        if(playerSymbol === "X"){
            event.currentTarget.innerText = `${playerSymbol}`;
            event.currentTarget.style.color = "blue";
        } else if (playerSymbol === "O"){
            event.currentTarget.innerText = `${playerSymbol}`;
            event.currentTarget.style.color = "red";
        }
        playerSwitch();
        checkForWinner();
    }
};

document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("click", addSymbol)
});

function clearBoard(){
    playerSymbol = "X";
    document.getElementById("title").innerText = "Player X's Turn";
    document.querySelectorAll(".grid-item").forEach(item => item.innerText = "?");
    document.querySelectorAll(".grid-item").forEach(item => item.style.color = "white");
}