var database, form, player, game, gamestate, canvas;

function setup(){
    database = firebase.database();
    canvas = createCanvas(800,800);
game = new Game();

}

function draw(){
    game.getState();
    game.start();
}