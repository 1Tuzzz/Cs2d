const bullets = [];

function shoot(angle){

    bullets.push({

        x: player.x,
        y: player.y,

        angle: angle,

        speed: 12,

        life: 60

    });

}

function updateBullets(){

    for(let i=bullets.length-1;i>=0;i--){

        const b=bullets[i];

        b.x+=Math.cos(b.angle)*b.speed;
        b.y+=Math.sin(b.angle)*b.speed;

        b.life--;

        if(b.life<=0){

            bullets.splice(i,1);

        }

    }

}

function drawBullets(ctx,camera){

    ctx.fillStyle="yellow";

    for(const b of bullets){

        ctx.beginPath();

        ctx.arc(
            b.x-camera.x,
            b.y-camer