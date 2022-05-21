rightWristX="";
rightWristY="";
rightWristScore="";


function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(ping_pong);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	posenet=ml5.poseNet(video,modelLoaded);
	poseNet.on("pose",gotPoses);
}
	function modelLoaded(){
		console.log("poseNet is intialized");

	}

	function gotPoses(results){
		if(results.length>0){
			console.log(results);
			rightWristX=results[0].pose.right.wrist.x;
			rightWristY=results[0].pose.right.wrist.y;
		}
	}


function draw() {
	game()
}






