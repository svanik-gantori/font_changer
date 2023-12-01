noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

function setup()
{   
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150)

    poseNet=ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background(200,150,190);
    fill(84, 20, 181);
    stroke(255,255,255)
    square(noseX,noseY,difference);
    document.getElementById("square_sides").innerHTML="The width and height of the square drawn is: "+difference+"px.";
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
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X: "+noseX+" Nose Y: "+noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("Left Wrist X: "+leftwristX+" Right Wrist X: "+rightwristX+" difference: "+difference);
        
    }

}