let player1 = {
    name: "player1",
    status: true, //true stands for active false for inactive
    symbol: "./../images/xsymbol.svg"
}

let player2 = {
    name: "player1",
    status: false, //true stands for active false for inactive
    symbol: "./../images/circlesymbol.svg"
}

let tiktaks = document.getElementsByClassName("tiktak")

let turn = (player) => {
    if(player.name === "player1"){
        for(let i = 0; i < tiktaks.length; i++){
            tiktaks[i].onclick = function(){
                var elem = document.createElement("img");
                elem.setAttribute("src", "./../images/xsymbol.svg" );
                elem.classList.add("symbol")
                tiktaks[i].appendChild(elem);
                for(let i = 0; i < tiktaks.length; i++){
                    tiktaks[i].onclick = null
                }
            }    
        }
    }
}


let game = () => {
    turn(player1);
}

game()