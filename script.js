
let playerSymbol = "X";

function playerSwitch(){
    if(document.getElementById("title").innerText === "Player 1's Turn"){
        document.getElementById("title").innerText = "Player 2's Turn";
        playerSymbol = "O";
    } else if (document.getElementById("title").innerText === "Player 2's Turn"){
        document.getElementById("title").innerText = "Player 1's Turn";
        playerSymbol = "X";
    }
}

function checkForWinner(){
    if(document.getElementById("topLeft").innerText === "X" && document.getElementById("topCenter").innerText === "X" && document.getElementById("topRight").innerText === "X"){
        document.getElementById("title").innerText = "Player 1 Wins!";
    } else if(document.getElementById("topLeft").innerText === "O" && document.getElementById("topCenter").innerText === "O" && document.getElementById("topRight").innerText === "O"){
        document.getElementById("title").innerText = "Player 2 Wins!";
    } else if(document.getElementById("centerLeft").innerText === "X" && document.getElementById("center").innerText === "X" && document.getElementById("centerRight").innerText === "X"){
        document.getElementById("title").innerText = "Player 1 Wins!";
    } else if(document.getElementById("centerLeft").innerText === "O" && document.getElementById("center").innerText === "O" && document.getElementById("centerRight").innerText === "O"){
        document.getElementById("title").innerText = "Player 2 Wins!";
    } else if(document.getElementById("bottomLeft").innerText === "X" && document.getElementById("bottomCenter").innerText === "X" && document.getElementById("bottomRight").innerText === "X"){
        document.getElementById("title").innerText = "Player 1 Wins!";
    } else if(document.getElementById("bottomLeft").innerText === "O" && document.getElementById("bottomCenter").innerText === "O" && document.getElementById("bottomRight").innerText === "O"){
        document.getElementById("title").innerText = "Player 2 Wins!";
    } else if(document.getElementById("topLeft").innerText === "X" && document.getElementById("centerLeft").innerText === "X" && document.getElementById("bottomLeft").innerText === "X"){
        document.getElementById("title").innerText = "Player 1 Wins!";
    } else if(document.getElementById("topLeft").innerText === "O" && document.getElementById("centerLeft").innerText === "O" && document.getElementById("bottomLeft").innerText === "O"){
        document.getElementById("title").innerText = "Player 2 Wins!";
    } else if(document.getElementById("topCenter").innerText === "X" && document.getElementById("center").innerText === "X" && document.getElementById("bottomCenter").innerText === "X"){
        document.getElementById("title").innerText = "Player 1 Wins!";
    } else if(document.getElementById("topCenter").innerText === "O" && document.getElementById("center").innerText === "O" && document.getElementById("bottomCenter").innerText === "O"){
        document.getElementById("title").innerText = "Player 2 Wins!";
    } else if(document.getElementById("topRight").innerText === "X" && document.getElementById("centerRight").innerText === "X" && document.getElementById("bottomRight").innerText === "X"){
        document.getElementById("title").innerText = "Player 1 Wins!";
    } else if(document.getElementById("topRight").innerText === "O" && document.getElementById("centerRight").innerText === "O" && document.getElementById("bottomRight").innerText === "O"){
        document.getElementById("title").innerText = "Player 2 Wins!";
    } else if(document.getElementById("topLeft").innerText === "X" && document.getElementById("center").innerText === "X" && document.getElementById("bottomRight").innerText === "X"){
        document.getElementById("title").innerText = "Player 1 Wins!";
    } else if(document.getElementById("topLeft").innerText === "O" && document.getElementById("center").innerText === "O" && document.getElementById("bottomRight").innerText === "O"){
        document.getElementById("title").innerText = "Player 2 Wins!";
    } else if(document.getElementById("topRight").innerText === "X" && document.getElementById("center").innerText === "X" && document.getElementById("bottomLeft").innerText === "X"){
        document.getElementById("title").innerText = "Player 1 Wins!";
    } else if(document.getElementById("topRight").innerText === "O" && document.getElementById("center").innerText === "O" && document.getElementById("bottomLeft").innerText === "O"){
        document.getElementById("title").innerText = "Player 2 Wins!";
    }
}

function addSymbol(event){
    if(event.currentTarget.innerText !== "X" && event.currentTarget.innerText !== "O"){
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
    winner = false;
    document.getElementById("title").innerText = "Player 1's Turn";
    document.getElementById("topLeft").style.color = "white";
    document.getElementById("topLeft").innerText = "?";
    document.getElementById("topCenter").style.color = "white";
    document.getElementById("topCenter").innerText = "?";
    document.getElementById("topRight").style.color = "white";
    document.getElementById("topRight").innerText = "?";
    document.getElementById("centerLeft").style.color = "white";
    document.getElementById("centerLeft").innerText = "?";
    document.getElementById("center").style.color = "white";
    document.getElementById("center").innerText = "?";
    document.getElementById("centerRight").style.color = "white";
    document.getElementById("centerRight").innerText = "?";
    document.getElementById("bottomLeft").style.color = "white";
    document.getElementById("bottomLeft").innerText = "?";
    document.getElementById("bottomCenter").style.color = "white";
    document.getElementById("bottomCenter").innerText = "?";
    document.getElementById("bottomRight").style.color = "white";
    document.getElementById("bottomRight").innerText = "?";
}