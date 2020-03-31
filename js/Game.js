/** 
 * @class Game
 */

 class Game{
     constructor(assets){
        this.bgColor = color("red");
        this.score = 0;
        this.win = false;
        this.lose = false;

        this.countDown = 1;
        this.sounds = assets.sounds;
        this.ship = new Player();
        this.particles = [];
        this.infected = [];
        this.level = 1;
        this.infectedRadius = 25;

        this.domRestart = document.getElementById('restart');
        this.domGamestart = document.getElementById('start');
     }



 init(){
     this.score = 0;
     this.lose = false;
     this.win = false;
     this.countdown = 1;
     this.ship.reset();
     this.infected = [];
     this.handleLevels();
 }
}