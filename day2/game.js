
kontra.init()
let { initKeys, keyPressed } = kontra;
initKeys();

let sprite = kontra.Sprite({
	x: 0,
	y: 40,
	width: 20,
	height: 20,
	color: 'green',
	dx: 1,
	dy: 1
	
});

function bounce(){
	if (sprite.x > 236 || sprite.x < 0) {
		sprite.dx = -sprite.dx;
	}
	if (sprite.y > 336 || sprite.y < 0) {
		sprite.dy = -sprite.dy;
	}	
}

let isspace = false;
let lastx, lasty;

function StopTheSprite(){
	if (isspace == false){
		lastx = sprite.dx, lasty = sprite.dy;
		sprite.dx = 0;
    sprite.dy = 0;
    isspace = true;
	}
	else if (isspace == true){
		sprite.dx = lastx;
    sprite.dy = lasty;
		isspace = false;
	}
}

function Restart(){
	sprite.x = 0, sprite.y = 40;
	sprite.dx = 1, sprite.dy = 1;
}

function SpeedControl() {
	if (sprite.dx >= 4) {
		sprite.dx = 4;
		return false;
	}
	if (sprite.dx <= -4) {
		sprite.dx = -4;
		return false;
	}
	if (sprite.dy >= 4) {
		sprite.dy = 4;
		return false;
	}
	if (sprite.dy <= -4) {
		sprite.dy = -4;
		return false;
	}
	return true;
}

function keyss(){
	if (keyPressed('space')) {
  	StopTheSprite();
  }
  if (keyPressed('f')) {
		if (SpeedControl() == false) return;
  	sprite.dx = sprite.dx*1.1;
  	sprite.dy = sprite.dy*1.1;
  }
  if (keyPressed('s')) {
  	sprite.dx /= 1.1;
  	sprite.dy /= 1.1;
  }
  if (keyPressed('enter')) {
  	Restart();
  } 
}

let loop = kontra.GameLoop({
	update: function(){
		bounce();
		keyss();
		sprite.update();
	},
	render: function() {
		sprite.render();
	}
});

loop.start();
