let playerX = 512;
let playerY = 380;
let playerR = 50;

let speed = 0;

let mouseX = 0;
let mouseY = 0;

let fps = 120;

let color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();


function start() {
    draw();
}

function mouseMove(evt) {
    mouseX = evt.clientX;
    mouseY = evt.clientY;
}
function draw() {
    const canvas = document.querySelector("canvas");
    //startowe polozenie kulki gracz i promien
    canvas.onmousemove = mouseMove;

    if (canvas.getContext) { //jesli zaladowane
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height); //czysci poprzednia pozycje gracza
        const player = new Path2D(); //nowy obiekt - gracz
        ctx.fillStyle = color; //kolor gracza
        player.arc(playerX, playerY, playerR, 0, Math.PI * 2, true); //rysuj
        ctx.fill(player); //wypelnij
        ctx.lineWidth = 2; //szerokosc bordera kulki
        ctx.strokeStyle = "black"; //kolor bordera
        ctx.stroke(player); //rysuj border

        setTimeout(() => {
            let dx = (mouseX - playerX);
            let dy = (mouseY - playerY);
            let distFromRadius = 10;

            let distance = Math.round(Math.sqrt(dx*dx + dy*dy)); // dystans do kursora

            if(distance > distFromRadius){
                dx *= speed/distance;
                dy *= speed/distance;
            }
            //ruch, zmiana predkosci zalezna od dystansu od srodka kulki gracza
            if(distance >= (playerR + distFromRadius) ){
                speed = 3;
                playerX += dx;
                playerY += dy;
            }
            if(distance <= (playerR + distFromRadius) && distance >= (playerR - distFromRadius)){
                speed = 1.5;
                playerX += dx;
                playerY += dy;
            }
            readMousePosition(playerX, playerY, playerR); //z pliku debug.js
            requestAnimationFrame(draw); //animuj
        }, 1000 / fps);
    }
    else{
        alert('ERROR!');
    }
}
