var  backgroundImage;
var car1,car2,car3,car4,cars;
var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;

function setup(){
  database = firebase.database();
  
  createCanvas(displayWidth,displayHeight);
game= new Game();
game.getState();
game.start()
  
}

function draw(){
  

  if(playerCount===4){

    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play()
  }
  
}

