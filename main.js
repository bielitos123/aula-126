song = "";
song1 = "";

function preloaded(){
    song = loadSong("music.mp3");
    song1 = loadSong("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    song = song.isPlaying();
    song1 = song1.isPlaying();
}
