let world, myModel, bling;
let livingRoom = '#lr';
let people = []; 
let szChange = 0.01;
// var mymodel;
// var allImages = ['#sky'];
// var flakes = [];
// var bling;

function preload() {
  //bling = loadSound('images/sound.mp3');
}

function setup() {
	noCanvas();
	world = new World('VRScene');
	makeGround();
	makePeople();
	
}



function draw() {
  //move the user
	move();
	
	
	//move the snowman
	// var sz = snowman.getZ();
	
	// if (sz > 2 || sz < 0) {
	// 	szChange *= -1;
	// }
	
	// snowman.setZ(sz + szChange);
	
	
	//create the sky
	let sky = select('#theSky');
	sky.attribute('src', livingRoom);
	
	
	//create a new flake
	
}

function makeGround(){
	  //create a plane
	  var g = new Plane({
		x:0, y:0, z:0, 
		width:50, height:50, 
		asset: 'brick',
		repeatX: 100,
		repeatY: 100,
		rotationX:-90, 
		metalness:0.2
	});

world.add(g);
}





function makePeople(){
		
  //create many trees
  for (var i = 0; i < 500; i++) {
	var tx = random(-25, 25);
	var tz = random(-25, 25);
	var ts = random(0.5, 2);
	
	if (tx < -2 || tx > 2) {
	  if (tz < -3 || tz > 3) {
		tree = new Container3D({
			x:tx, y:0, z:tz,
			
	  });
	  people.push(tree);
	  world.add(tree);
  
	  var torso = new Cylinder({
		x:1, y:0.3, z:0,
		height:3,
		radius: 0.5,
		red:58, green:30, blue:200,
	 	});
		tree.addChild(torso);
	

	  var head = new Sphere({
					  x:1, y:2, z:0,
					  height:1,
					  scaleX:.75, scaleZ:.75,
					  radiusBottom: .1, radiusTop: 0.1,
					  red:255, green:255, blue:194,
				  });
	  tree.addChild(head);

	var flyer = new Plane({
		x:.25, y:1.5, z:0, 
		width:.5, height:1, 
		rotationX:-45, rotationZ:0,
		
				  });
	  tree.addChild(flyer);
	  

	  
	  }
	}
}
}

function move(){
	if (mouseIsPressed || touchIsDown) {
		world.moveUserForward(0.1);
		//world.setUserPosition(20, pos.y, pos.z);
	}

	var pos = world.getUserPosition();
	
	if (pos.x > 25) {
		world.setUserPosition(-20, pos.y, pos.z);
	}
	else if (pos.x < -25) {
		world.setUserPosition(20, pos.y, pos.z);
	}

	if (pos.z > 25) {
		world.setUserPosition(pos.x, pos.y, -20);
	}
	else if (pos.z < -25) {
		world.setUserPosition(pos.x, pos.y, 20);
	}
}