    var shuffledBag = [];
    var tempBag = [];
    var selected = false;
    var tabCounter = 0;
    var firstTurn = true;
    var sameColumn = true;
    var sameRow = true;
    var players = []
    var player1;
    var player2;
    var resetGame = function () {
        shuffledBag = [];
        tempBag = [];
        selected = false;
        tabCounter = 0;
        firstTurn = true;
        sameColumn = true;
        sameRow = true;
        players = [{
            name: "",
            score: 0,
            rack: []
        },
        {
            name: "",
            score: 0,
            rack: []
        }]
    }
    
    // to end the game
    var endGame = function () {
        players.forEach(function (player) {
            player.rack.forEach(function (tile) {
                player.score -= tile.score;
            })
        })
        document.querySelector('.tempInPlay').textContent = "";
        document.querySelector('.pemInPlay').textContent = "";
        document.querySelectorAll('.playerOneTiles').forEach(playerOneTiles => {
            item.style.display = 'none';
        });
        document.querySelectorAll('.playerOneTile').forEach(playerOneTile => {
            item.style.display = 'none';
        });
        document.querySelector('.playerTwoTiles').style.display = "block";
        document.querySelector('.playerTwoTile').style.display = "block";
        document.querySelectorAll('.playerOneTilesRow').forEach(playerOneTilesRow => {
            playerOneTilesRow.style.display = 'none';
        });
        document.querySelectorAll('.playerTwoTilesRow').forEach(playerTwoTilesRow => {
            playerTwoTilesRow.style.display = 'none';
        });
        const permInPlay = document.querySelector('.permInPlay');
        permInPlay.classList.remove('permInPlay');
        document.querySelector('.playerOneTile').remove;
        document.querySelector('.playerTwoTile').remove;
        createBag();
        resetGame();
    
        document.querySelectorAll('.container').forEach(container => {
            container.style.display = 'none';
        });
        document.querySelectorAll('.letterValuesBox').forEach(letterValuesBox => {
            letterValuesBox.style.display = 'none';
        });
        document.querySelector('.playAgain').style.display = "block";
    }
    
    
    function start(){
        player1=document.getElementById("player1").value;
        console.log(player1)
        player2=document.getElementById("player2").value;
        location.href="./game.html";
        

    }
var player1;
var player2;
document.getElementById("demo").innerHTML=totalTile;
document.getElementById("playerOneTitle").innerHTML=player1;
document.getElementById("playerTwoTitle").innerHTML=player2;
function backToRack(){
    location.href="./gameover.html"
}
function helpBox(){
    location.href="./inst.html"
}
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function showTiles(){

}
function createTileBag() {
    var table = document.createElement('table');
    table.setAttribute("border", '2px');
    var tbody = document.createElement('tbody');
    for (var y = 0; y < 15; ++y) {
        var tr = document.createElement('tr');
        for (var x = 0; x < 15; ++x) {
            var td = document.createElement('td');
            td.innerHTML = " ";
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    table.style.width = '250px';
    table.style.height = '250px';
    table.style.justifyContent = 'center';
    table.style.alignItems = 'center';
    const element = document.getElementById('grid');
    element.appendChild(table);
}
    createTileBag();

    
    
    