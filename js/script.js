/** 
 * @game DontGetInfected
*/

//Basics of P5, function setup and function draw
//for setup -> size() changed to createCanvas()

let game;
//gets the current windows height and width
let gameWidth = window.innerWidth;
let gameHeight = window.innerHeight;
let assets = new AssetFile();

//preload is used to handle loading of external files in a blocking way, this way, setup() will wait untill any load calls within have finished
function preload(){
    assets.preload();
}

function setup(){
    createCanvas(gameWidth, gameHeight);   
    game = new Game(assets);
    game.restart();
    game.init();
}

function draw(){ 
    background(game.bgColor);
}