$(function() {

    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    
    // body
    ctx.fillStyle = "rgb(255, 255, 0)";
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.bezierCurveTo(100, 0, 500, 0, 500, 200);
    ctx.bezierCurveTo(500, 400, 100, 400, 100, 200);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    
    // eyes white
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(200, 125, 50, 50);
    ctx.fillRect(350, 125, 50, 50);
    
    // eyes black
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(213, 150, 25, 25);
    ctx.fillRect(362, 150, 25, 25);
    
    // mouth
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.beginPath();
    ctx.moveTo(200, 250);
    ctx.lineTo(400, 250);
    ctx.bezierCurveTo(300, 300, 300, 300, 200, 250);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

});