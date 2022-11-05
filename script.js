var totalTile=225;
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
