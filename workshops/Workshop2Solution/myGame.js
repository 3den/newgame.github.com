$(function() {

    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    
    var playerSpeed = 10;
    var playerX = 250;
    var playerY = 150;
    var playerHeadingX = 0
    var playerHeadingY = 0;
    
    var bgGoingRight = true;
    var bgX = 100;
    
    // Animation loop
    window.webkitRequestAnimationFrame(function loop() {
    
        ctx.clearRect(0, 0, 600, 400);
        
        // Background square
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.fillRect(bgX, 100, 200, 200);
                
        // The player
        ctx.fillStyle = "rgba(255, 0, 0, .8)";
        ctx.fillRect(playerX, playerY, 100, 100);
        
        window.webkitRequestAnimationFrame(loop);
        
    });
    
    // Game loop
    window.setInterval(function() {
    
        // background moves constantly
        if (bgGoingRight) {
            bgX++;
        }
        else {
            bgX--;
        } 
        if (bgX > 300 || bgX < 100) {
            bgGoingRight = !bgGoingRight;
        }
        
        // player moves based on current heading
        playerX += playerHeadingX;
        playerY += playerHeadingY;
        
    
    }, 50);
    
    // Player movement based on keyboard input
    $(document).keydown(function(e) {
    
        var key = keyDecode(e);
                
        if (key === "left") {
            playerHeadingX = 0 - playerSpeed;
        }
        else if (key === "right") {
            playerHeadingX = playerSpeed;
        }
        else if (key === "up") {
            playerHeadingY = 0 - playerSpeed;
        }
        else if (key === "down") {
            playerHeadingY = playerSpeed;
        }
    
    })
    .keyup(function(e) {
    
        var key = keyDecode(e);
                
        if (key === "left") {
            playerHeadingX = 0;
        }
        else if (key === "right") {
            playerHeadingX = 0;
        }
        else if (key === "up") {
            playerHeadingY = 0;
        }
        else if (key === "down") {
            playerHeadingY = 0;
        }
    
    });

});