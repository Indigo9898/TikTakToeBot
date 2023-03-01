let player1 = {
    name: "player1",
    status: true, //true stands for active false for inactive
    symbol: "./../images/xsymbol.svg"
}

let player2 = {
    name: "player2",
    status: false, //true stands for active false for inactive
    symbol: "./../images/circlesymbol.svg"
}

let tiktaks = document.getElementsByClassName("tiktak");
let currentPlayer = document.getElementById("currentPlayer");
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3")

let turn = (tiktak) => {
    currentTiktak = document.getElementById(tiktak)
    console.log(currentTiktak.getAttribute("data-type"))
    console.log(currentTiktak)
    if(currentTiktak.getAttribute("data-type") === "x" || currentTiktak.getAttribute("data-type") ==="o"){
        return;
    }
    if(player1.status === true){
        image = document.createElement("img");
        image.setAttribute("src", player1.symbol);
        image.setAttribute("alt", "X Symbol");
        image.classList.add("symbol");
        currentTiktak.appendChild(image)
        player1.status = false;
        player2.status = true;
        currentTiktak.setAttribute("data-type", "x")
        currentPlayer.innerText = "Player 2"
    } else{
        image = document.createElement("img");
        image.setAttribute("src", player2.symbol);
        image.setAttribute("alt", "O Symbol");
        image.classList.add("symbol");
        currentTiktak.appendChild(image)
        player2.status = false;
        player1.status = true;
        currentTiktak.setAttribute("data-type", "o")
        currentPlayer.innerText = "Player 1"
    }
}


checkGameEnd = () => {
    if(a1.getAttribute("data-type") === "x" && a2.getAttribute("data-type") === "x" && a3.getAttribute("data-type") === "x"){
        alert("Player 1 Wins")
        setTimeout(() =>{
            location.reload()
        }, "1000")
    }
}


for(let i = 0; i < tiktaks.length; i++){
    tiktaks[i].onclick = () => {
        turn(tiktaks[i].id)
        checkGameEnd()
    }
}