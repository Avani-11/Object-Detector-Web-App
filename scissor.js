status1 = "";

function preload() 
{
    img = loadImage("odwa-2.jpg");
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status1 = true;
}

function gotResult(error, results)
{
    if (error)
    {
      console.log(error);
    }
    console.log(results);
    objects = results;
}