// @ianmccunn
// MIT
//
// Basic canvas animation/player movemnt example.
// >> WADS + mouse

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  console.log('preload');
}

var cursors;

function rand(min, max) {

}

function create() {
  console.log('create');
  // var button = new game.Button(game, 10, 10, function(event) { console.log('button pressed')});
  game.stage.backgroundColor = '#2d2d2d';

    //  Make our game world 2000x2000 pixels in size (the default is to match the game size)
  game.world.setBounds(0, 0, 20000, 20000);
  
  var graphics = [];

  for (var i = 0; i < 2000; i++) {
    graphics.push(game.add.graphics(0, 0));
  }
  for (var i = 0; i < 2000; i++) {
    graphics[i].lineStyle(2, 0xffd900, 1);
    graphics[i].beginFill(0xFF0000, 1);
    graphics[i].drawCircle(game.world.randomX, game.world.randomY, 20);
  }

  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  console.log('update');
  var camSpeed = 2;
  if (cursors.up.isDown) {
    game.camera.y -= camSpeed;
  } else if (cursors.down.isDown) {
    game.camera.y += camSpeed;
  }

  if (cursors.left.isDown) {
    game.camera.x -= camSpeed;
  } else if (cursors.right.isDown) {
    game.camera.x += camSpeed;
  }

}
