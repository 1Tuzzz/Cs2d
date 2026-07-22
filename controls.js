const leftJoystick = {
    active: false,

    baseX: 100,
    baseY: 0,

    stickX: 100,
    stickY: 0,

    radius: 50,

    dx: 0,
    dy: 0
};

function initControls(canvas){

    leftJoystick.baseY = window.innerHeight - 100;
    leftJoystick.stickY = leftJoystick.baseY;

    canvas.addEventListener("touchstart", e => {

        for(const touch of e.touches){

            if(touch.clientX < window.innerWidth / 2){

                leftJoystick.active = true;

                leftJoystick.baseX = touch.clientX;
                leftJoystick.baseY = touch.clientY;

                leftJoystick.stickX = touch.clientX;
                leftJoystick.stickY = touch.clientY;

            }

        }

    });

    canvas.addEventListener("touchmove", e => {

        if(!leftJoystick.active) return;

        const touch = e.touches[0];

        let dx = touch.clientX - leftJoystick.baseX;
        let dy = touch.clientY - leftJoystick.baseY;

        const dist = Math.hypot(dx, dy);

        if(dist > leftJoystick.radius){

            dx = dx / dist * leftJoystick.radius;
            dy = dy / dist * leftJoystick.radius;

        }

        leftJoystick.stickX = leftJoystick.baseX + dx;
        leftJoystick.stickY = leftJoystick.baseY + dy;

        leftJoystick.dx = dx / leftJoystick.radius;
        leftJoystick.dy = dy / leftJoystick.radius;

    });

    canvas.addEventListener("touchend", () => {

        leftJoystick.active = false;

        leftJoystick.dx = 0;
        leftJoystick.dy = 0;

    });

}

function drawLeftJoystick(ctx){

    if(!leftJoystick.active) return;

    ctx.globalAlpha = 0.5;

    ctx.fillStyle = "#666";

    ctx.beginPath();
    ctx.arc(
        leftJoystick.baseX,
        leftJoystick.baseY,
        leftJoystick.radius,
        0,
        Math.PI * 2
    );
    ctx.fill();

    ctx.fillStyle = "#ffffff";

    ctx.beginPath();
    ctx.arc(
        leftJoystick.stickX,
        leftJoystick.stickY,
        20,
        0,
        Math.PI * 2
    );
    ctx.fill();

    ctx.globalAlpha = 1;
}
//==============================
// Правый джойстик
//==============================

const rightJoystick = {
    active: false,

    baseX: 0,
    baseY: 0,

    stickX: 0,
    stickY: 0,

    radius: 50,

    dx: 0,
    dy: 0
};

canvas.addEventListener("touchstart", e => {

    for (const touch of e.changedTouches) {

        if (touch.clientX > window.innerWidth / 2) {

            rightJoystick.active = true;

            rightJoystick.baseX = touch.clientX;
            rightJoystick.baseY = touch.clientY;

            rightJoystick.stickX = touch.clientX;
            rightJoystick.stickY = touch.clientY;
        }

    }

});

canvas.addEventListener("touchmove", e => {

    if (!rightJoystick.active) return;

    for (const touch of e.changedTouches) {

        if (touch.clientX > window.innerWidth / 2) {

            let dx = touch.clientX - rightJoystick.baseX;
            let dy = touch.clientY - rightJoystick.baseY;

            const dist = Math.hypot(dx, dy);

            if (dist > rightJoystick.radius) {

                dx = dx / dist * rightJoystick.radius;
                dy = dy / dist * rightJoystick.radius;

            }

            rightJoystick.stickX = rightJoystick.baseX + dx;
            rightJoystick.stickY = rightJoystick.baseY + dy;

            rightJoystick.dx = dx / rightJoystick.radius;
            rightJoystick.dy = dy / rightJoystick.radius;

            player.angle = Math.atan2(dy, dx);

        }

    }

});

canvas.addEventListener("touchend", () => {

    rightJoystick.active = false;

    rightJoystick.dx = 0;
    rightJoystick.dy = 0;

});