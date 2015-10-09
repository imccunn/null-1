var cont = document.createElement('div');
cont.setAttribute('id', 'rCont');
document.body.appendChild(cont);

var cc = document.createElement('canvas');
cc.setAttribute('id', 'c');
cont.appendChild(cc);
var pc = document.createElement('canvas');
pc.setAttribute('id', 'playerLayer');
cont.appendChild(pc);

var c = document.getElementById('c');
var ctx = c.getContext('2d');
c.width = window.innerWidth;
c.height = 800;

var p = document.getElementById('playerLayer');
var pCtx = p.getContext('2d');
p.width = c.width;
p.height = 800;

ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, c.width, c.height);

var nx = Math.floor(c.width/20);
var ny = Math.floor(c.width/20);
var xPos = 0;

function drawGrid(){
  for (var i = 0; i < nx; i++) {
    xPos += 20;
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(xPos, 0, 1, c.height);
  }
  xPos = 0;
  for (var i = 0; i < nx; i++) {
    xPos += 20;
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(0, xPos, c.width, 1);
  }
}

drawGrid();

var player = {
  form: {
    width: 10, 
    height: 10,
  },
  x: p.width/2,
  y: p.height/2,
  speed: {
    x: 2,
    y: 2
  },
  move: false,
  newPos: {
    x: 0,
    y: 0
  },
  oldPos: {
    x: 0,
    y: 0
  }
};

var keysDown = {};
var keysUp = {};

document.addEventListener('keydown', function(e) {
    keysDown[e.which] = true;
    player.move = false;
});
document.addEventListener('keyup', function(e) {
  keysDown[e.which] = false;
});

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function setPlayerVec(x, y) {
  player.newPos = {
    x: x,
    y: y
  };
  player.oldPos = {
    x: player.x,
    y: player.y
  }
}

function movePlayer(evt) {
  var mousePos = getMousePos(c, evt);
  setPlayerVec(mousePos.x, mousePos.y);
  player.move = true;
}

document.addEventListener('click', function(evt) {
  movePlayer(evt);
});

player.updatePlayerPos = function(x, y) {
  if (player.move) {
    var angle = Math.atan2(player.newPos.y - player.y, player.newPos.x - player.x); 
    
    var sin = Math.sin(angle) * player.speed.y;
    var cos = Math.cos(angle) * player.speed.x;
    player.x += cos;
    player.y += sin;
    if (Math.abs(player.newPos.x - player.x) < 1 && Math.abs(player.newPos.y - player.y) < 1) {
      player.move = false;
    }
  } else {
    if (keysDown[65]) {
      player.x -= player.speed.x;
    }
    if (keysDown[87]) {
      player.y -= player.speed.y;
    }
    if (keysDown[68]) {
      player.x += player.speed.x;
    }
    if (keysDown[83]) {
      player.y += player.speed.y;
    }
    player.x = clamp(player.x, 0, c.width - player.form.width);
    player.y = clamp(player.y, 0, c.height - player.form.height);
  }
}

function clamp(x, min, max) {
  return x < min ? min : (x > max ? max : x);
}

function drawPlayer() {
  pCtx.beginPath();
  pCtx.arc(player.x, player.y, 5, 0, 2 * Math.PI);
  pCtx.fillStyle = '#ff0000';
  pCtx.fill();
  pCtx.lineWidth = 1;
  pCtx.strokeStyle = '#ff8800';
  pCtx.stroke();
  // pCtx.fillRect(player.x, player.y, player.form.width, player.form.height);
}

function frame() {
  pCtx.clearRect(0, 0, p.width, p.height);
  player.updatePlayerPos();
  drawPlayer();
  window.requestAnimationFrame(frame);
}

frame();