// @ianmccunn
// MIT
//
// Basic canvas animation/player movemnt example.
// >> WADS + mouse

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  console.log('preload');
}

function create() {
  console.log('create');
  var button = new Button(game, 10, 10, function(event) { console.log('button pressed')});
}

function update() {
  console.log('update');

}
