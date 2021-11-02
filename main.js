var mustacheX = 0;
var mustacheY = 0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/MG3qcn7k/mustache.png');
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("pose net initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        mustacheX = results[0].pose.nose.x - 20;
        mustacheY = results[0].pose.nose.y - 3;
        console.log("x below nose - " + mustacheX);
        console.log("y below nose - " + mustacheY);
    }
}

function draw() {
    image(video,0,0,300,300);
    image(mustache,mustacheX,mustacheY,40,40);
}

function takeSnapshot() {
    save("MustachePic.jpg")
}