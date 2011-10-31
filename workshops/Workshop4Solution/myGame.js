$(function() {

    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    
    var world = BB.createWorld(canvas, {debugDraw:true});
    
    // Player
    var player = world.createEntity({
        name: "player",
        x: 2,
        y: 2,
        shape: 'circle',
        radius: 1
    });
    
    // Ground
    world.createEntity({
        name: "ground",
        type: "static",
        x: 10,
        y: 13,
        shape: 'square',
        height: .2,
        width: 10
    });
    
    world.createEntity({
        x: 5,
        y: 5,
        shape: 'polygon',
        points: [{x:0, y:0},
                 {x:4, y:-3},
                 {x:6, y:-3},
                 {x:10, y:0}]
    });
    
    world.createEntity({
        x: 10,
        y: -3,
        shape: 'square',
        width: .1,
        height: 3
    });
    
    // Player movement based on keyboard input
    $(document).keydown(function(e) {
    
        var key = keyDecode(e);
                
        if (key === "left") {
            player.setForce("movement", 30, 270);
        }
        else if (key === "right") {
            player.setForce("movement", 30, 90);
        }
        else if (key === "up") {
            player.applyImpulse(30);
        }
    
    });
    
    $(document).keyup(function(e) {
    
        var key = keyDecode(e);
        
        if (key === "left" || key === "right") {
            player.clearForce("movement");
        }
    
    });

});