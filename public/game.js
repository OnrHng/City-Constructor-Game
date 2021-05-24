
var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 400,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 }
        }
    }

};
var scenes = {preload: preload, create: create};
var game = new Phaser.Game(600,400, Phaser.AUTO, 'cityConstructor',scenes);
 
function preload ()
{
    this.load.image('grass_tile', 'assets/landscapeTiles_sheet.png', 132, 99);
    // this.load.spritesheet('tiles', 'assets/landscapeTiles_sheet.png', 132, 132)

    // this.load.image('sky', 'assets/skies/space3.png');
    // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    // this.load.image('red', 'assets/particles/red.png');
}

function create ()
{
    game.stage.backgroundColor = "#4488AA";
    // this.add.setBackgroundColor('green');
    // var particles = this.add.particles('red');

    // var emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });

    // var logo = this.physics.add.image(400, 100, 'logo');

    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);

    // emitter.startFollow(logo);
}
