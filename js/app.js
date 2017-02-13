// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //added
    this.x; // has to be zero?
    this.y; // has to be one of 3 tiles
    this.v;  //speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // added
    //this.v = dt * this.v; //this is wrong.
    if(this.x < 7 * 83){
        this.x = this.x + this.v * dt * 83;
    }
    else {
        this.x = 0;
    };
/*    if (this.x == player.x && this.y == player.y){
        console.log("You Lose!");
        this.x = 0;
    }
    else if(this.x == player.x && this.y == player.y){
        console.log("You Lose!");
        this.x = 0;
    }
    else if(this.x == player.x && this.y == player.y){
        console.log("You Lose!");
        this.x = 0;
    }
    else if(this.x == player.x && this.y == player.y){
        console.log("You Lose!");
        this.x = 0;
    }
*/
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// added
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x; 
    this.y; 
    //this.v;  //speed;
};

Player.prototype.update = function(dt){
   // this.x = 2.5 * 83;
   // this.y = 4.5 * 83;
  // if (this.x == e1.x || this.x == e2.x || this.x == e3.x || this.x == e4.x){

  // }
/*    if (player.x == e1.x && player.y == e1.y){
            console.log("You Lose!");
            this.x = 2.5 * 83;
            this.y = 4.85 * 83;
        }
*/
};

Player.prototype.render = function(){
/*     if (player.x == e1.x && player.y == e1.x){
            console.log("You Lose!");
            this.x = 2.5 * 83;
            this.y = 4.85 * 83;
        }
*/
    ctx.drawImage(Resources.get(this.sprite),this.x, this.y);
   // console.log("x= " + this.x);
   // console.log("y= " + this.y);

};

var keypress;

Player.prototype.handleInput = function(keypress) {
/*  console.log('keypress: ' + keypress)  ;*/
    if (keypress == 'left' && player.x > 101){
        player.x = player.x - 101;
      //  console.log("left");
    }
    else if(keypress == 'right'&& player.x <400){
        player.x = player.x + 101;
      //  console.log("right");
    }
    else if (keypress == 'up'&& player.y > 0){
        player.y = player.y - 83;
     //   console.log("up");
     //   console.log("x= " + this.x);
     //   console.log("y= " + this.y);
        if(player.y < 0){
            console.log("You Win!");
            player.x = 2.5 * 83;
            player.y = 4.85 * 83;
        }
/*        if (player.x == e1.x && player.y == e1.y){
            console.log("You Lose!");
            player.x = 2.5 * 83;
            player.y = 4.85 * 83;
        }
*/
    }
    else if(keypress == 'down' && player.y < 400){
        player.y = player.y + 83;
     //   console.log("down");
    }


};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// added
var e1 = new Enemy();
e1.x = -1 * 83;
e1.y = 1*60;
e1.v = 1;

var e2 = new Enemy();
e2.x = -1 * 83 ;
e2.y = 2 * 75;
e2.v = 2;

var e3 = new Enemy();
e3.x = -1 * 83 ;
e3.y = 3 * 75;
e3.v = 3;

var e4 = new Enemy();
e4.x = -1 * 83 ;
e4.y = 3 * 75;
e4.v = 1;

var allEnemies = [e1,e2,e3,e4];

var player = new Player();
player.x = 2.5 * 83;
player.y = 4.85 * 83;



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
