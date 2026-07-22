const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const camera = {
    x: 0,
    y: 0
};

const map = {
    width: 3000,
    height: 3000
};

initControls(canvas);

function update(){

    player.x += leftJoystick.dx * player.speed;
    player.y += leftJoystick.dy * player.speed;

    player.x = Math.max(0, Math.min(map.width, player.x));
    player.y = Math.max(0, Math.min(map.height, player.y));

    camera.x = player.x - canvas.width / 2;
    camera.y = player.y - canvas.height / 2;

}

function drawMap(){

    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(
        -camera.x,
        -camera.y,
        map.width,
        map.height
    );

    ctx.strokeStyle = "#5fb95f";

    for(let x=0;x<map.width;x+=100){

        ctx.beginPath();
        ctx.moveTo(x-camera.x,-camera.y);
        ctx.lineTo(x-camera.x,map.height-camera.y);
        ctx.stroke();

    }

    for(let y=0;y<map.height;y+=100){

        ctx.beginPath();
        ctx.moveTo(-camera.x,y-camera.y);
        ctx.lineTo(map.width-camera.x,y-camera.y);
        ctx.stroke();

    }

}

function game(){

    update();

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawMap();

    player.draw(ctx,camera);

    drawLeftJoystick(ctx);

    requestAnimationFrame(game);

}

game();