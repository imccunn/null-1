// @ianmccunn
// MIT
//
// Basic canvas animation/player movemnt example.
// >> WADS + mouse
// var Terrain = require('./terrain.js');

var width = window.innerWidth;
var height = window.innerHeight;

// var terrain = new Terrain(4);
var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create, render: render, update: update });
window.game = game;

// var display = document.getElementById('display');
// var ctx = display.getContext('2d');
var width = window.innerWidth;
var height = window.innerHeight;

var center = {
  x: width / 2,
  y: height / 2
};

// terrain.generate(0.1);
// console.log(terrain.map);
// terrain.draw(ctx, width, height);


function preload() {
  console.log('preload');
}

var cursors;
var controls = {};

function rand(min, max) {

}

var player;
function create() {
  console.log('create');
  // var button = new game.Button(game, 10, 10, function(event) { console.log('button pressed')});
  game.stage.backgroundColor = '#3b3b3b';

    //  Make our game world 2000x2000 pixels in size (the default is to match the game size)
  game.world.setBounds(0, 0, 2000, 2000);

  var graphics = [];

  for (var i = 0; i < 100; i++) {
    graphics.push(game.add.graphics(0, 0));
  }

  for (var i = 0; i < 100; i++) {
    graphics[i].lineStyle(2, 0x000000, 1);
    graphics[i].beginFill(0xd3d3d3, 1);
    graphics[i].drawCircle(game.world.randomX, game.world.randomY, 20);
  }

  cursors = game.input.keyboard.createCursorKeys();
  controls.up = game.input.keyboard.addKey(Phaser.Keyboard.W);
  controls.down = game.input.keyboard.addKey(Phaser.Keyboard.S);
  controls.left = game.input.keyboard.addKey(Phaser.Keyboard.A);
  controls.right = game.input.keyboard.addKey(Phaser.Keyboard.D);
  player = new Phaser.Rectangle(center.x, center.y, center.y, 20);
}

function render() {
  game.debug.geom(player, '#22ff44');

}

function update() {

  var camSpeed = 2;
  if (controls.up.isDown) {
    game.camera.y -= camSpeed;
  } else if (controls.down.isDown) {
    game.camera.y += camSpeed;
  }

  if (controls.left.isDown) {
    game.camera.x -= camSpeed;
  } else if (controls.right.isDown) {
    game.camera.x += camSpeed;
  }

}

