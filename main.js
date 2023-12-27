leftwristX=0;
rightwristX=0;
difference=0;

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
    background("red");
    document.getElementById("font_info").innerHTML="Font size of the text will be "+difference+" px";

    textSize(difference)
    fill("black");
    text("Svanik",50,400);
    textSize(100);
  
}

function ModelLoaded()
{
    console.log("Pose net is initialized!");
}

function gotPoses(results,error)

{
    if(error)
    {
        console.error(error);
    }
    else
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
}