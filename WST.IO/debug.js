//pokaz koordynaty myszki
function readMousePosition(pX, pY, pR){
    let pos = document.querySelector(".mousePos");

    pos.innerHTML = 'X = ' + mouseX + ' Y = ' + mouseY + '<br> playerX = ' + Math.round(pX) + ' playerY = ' + Math.round(pY) + ' playerR = ' + pR;
    //console.log('X = ' + mouseX + ' Y = ' + mouseY + '<br> playerX = ' + pX + ' playerY = ' + pY + ' playerR = ' + pR);
}
