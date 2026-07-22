const player = {
    x: 500,
    y: 500,

    radius: 20,

    speed: 4,

    angle: 0,

    color: "#0066ff",

    draw(ctx, camera){

        ctx.save();

        ctx.translate(
            this.x - camera.x,
            this.y - camera.y
        );

        ctx.rotate(this.angle);

        // Игрок
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Пистолет
        ctx.fillStyle = "#222";
        ctx.fillRect(0, -4, 28, 8);

        ctx.restore();
    }
};