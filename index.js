lastX = 0;
lastY = 0;
hue = 0;

function draw(e, isDrawing, ctx) {
    //lastX = e.clientX;
    //lastY = e.clientY
    // function doesn't run when mouse not down'
    if (!isDrawing) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // set both values faster = destructuring an array
    [lastX, lastY] = [e.offsetX, e.offsetY];
    if (hue >= 360)
    { hue = 0; }
    hue++;
}



window.onload = function () {
    isDrawing = false;
    let canvas = document.querySelector('#draw');
    //you draw on the contect of the canvas (also for 3d rendering ectc of the contxr
    let ctx = canvas.getContext('2d');
    // man könnte canvas auf höhe/weite des windows setzen: cancas.width = window.innerWidth usw
    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // anonymous function which takes an argument and also event as parameter    
    canvas.addEventListener('mousemove', function (e) { draw(e, isDrawing, ctx); });
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        // store last position as soon as mouse down -> start
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
}