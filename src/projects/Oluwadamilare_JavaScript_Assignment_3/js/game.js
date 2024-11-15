// Create the canvas
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/background.png"; 

// Bug image
var bugReady = false;
var bugImage = new Image();
bugImage.onload = function () {
    bugReady = true;
};
bugImage.src = "images/hero.png"; 

// Game objects
var bug = {
    speed: 1000 // Movement interval in milliseconds
};
var score = 0;
var initialSpeed = bug.speed;

// Player object
var player = {
    speed: 256, // Movement in pixels per second
    x: canvas.width / 2,
    y: canvas.height / 2
};

// Reset the bug position
var resetBug = function () {
    bug.x = Math.random() * (canvas.width - 32);
    bug.y = Math.random() * (canvas.height - 32);
};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

// Update game objects
var update = function (modifier) {
    if (38 in keysDown) { // Player holding up
        player.y -= player.speed * modifier;
    }
    if (40 in keysDown) { // Player holding down
        player.y += player.speed * modifier;
    }
    if (37 in keysDown) { // Player holding left
        player.x -= player.speed * modifier;
    }
    if (39 in keysDown) { // Player holding right
        player.x += player.speed * modifier;
    }

    // Check for collision with the bug
    if (
        player.x <= (bug.x + 32) &&
        bug.x <= (player.x + 32) &&
        player.y <= (bug.y + 32) &&
        bug.y <= (player.y + 32)
    ) {
        score++;
        bug.speed = Math.max(200, bug.speed - 100); // Decrease interval but not less than 200ms
        resetBug();
    }
};

// Draw everything
var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (bugReady) {
        ctx.drawImage(bugImage, bug.x, bug.y);
    }

    // Draw player
    ctx.fillStyle = "rgb(0, 0, 250)";
    ctx.fillRect(player.x, player.y, 32, 32);

    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Score: " + score, 32, 32);
};

// The main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Event listener for clicking on the bug
canvas.addEventListener("click", function (e) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - rect.top;

    if (mouseX >= bug.x && mouseX <= bug.x + 32 && mouseY >= bug.y && mouseY <= bug.y + 32) {
        score++;
        bug.speed = Math.max(200, bug.speed - 100); // Decrease interval but not less than 200ms
        resetBug();
    }
});

// Event listeners for buttons
document.getElementById("resetSpeedButton").addEventListener("click", function () {
    bug.speed = initialSpeed;
    clearInterval(intervalId); // Clear the existing interval
    intervalId = setInterval(function() {
        resetBug();
    }, bug.speed); // Set a new interval with the reset speed
});

document.getElementById("resetScoreButton").addEventListener("click", function () {
    score = 0;
});

// Start the game
resetBug();
var then = Date.now();
var intervalId = setInterval(function() {
    resetBug();
}, bug.speed);
main();
