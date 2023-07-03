
kontra.init()

let sprite = kontra.Sprite({
	x: 0,
	y: 40,
	width: 20,
	height: 20,
	color: 'green',
	dx: 1,
	dy: 1
	
});

let loop = kontra.GameLoop({
	update: function(){
		if (sprite.x > 236 || sprite.x < 0) {
			sprite.dx = -sprite.dx;
		}
		if (sprite.y > 336 || sprite.y < 0) {
			sprite.dy = -sprite.dy;
		}
  	
		sprite.update();
		
	},
	render: function() {
		sprite.render();
	}
});

loop.start();


