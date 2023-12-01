function setup()
{
    
    video=createCapture(VIDEO);
    video.size(500,450);

    canvas=createCanvas(500,500);
    canvas.position(510,100)

    poseNet=ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background(200,150,190);
    textSize(3)
    fill(difference);
    text("Svanik",20,10);
}

function ModelLoaded()
{
    console.log("Pose net is initialized!");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("Left Wrist X: "+leftwristX+" Right Wrist X: "+rightwristX+" difference: "+difference);
        
        
    }
}