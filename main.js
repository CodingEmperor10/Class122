x = 0;
y = 0;
circle = "";
rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
document.getElementById("status").innerHTML = "System is listening please say something ";
recognition.start();
}

recognition.onresult = function(event) {

console.log(event);

var content = event.results[0][0].transcript;

document.getElementById("status").innerHTML = "What you spoke is recognised as : " + content;
        if(content == "circle" ){
    x =  Math.floor(Math.random() * 900);
    y =  Math.floor(Math.random() * 600);     
 document.getElementById("status").innerHTML = "Circle is being drawn, pls wait.";
 circle = "start_now";
}
if(content == "rectangle" ){
    x =  Math.floor(Math.random() * 900);
    y =  Math.floor(Math.random() * 600);     
 document.getElementById("status").innerHTML = "Rectangle is being drawn, pls wait.";
 rect = "start_now";
}
}

function setup()
{
  canvas = createCanvas(900, 600);
}

function draw()
{
if(circle == "start_now"){
circle(x, y, 90);
document.getElementById("status").innerHTML = "Your awaited circle is drawn. Hope you enjoyed your wait:)";
circle = "";
}
if(rect == "start_now"){
    rect(x, y, 70, 50);
    document.getElementById("status").innerHTML = "Your awaited rectangle is drawn. Hope you enjoyed your wait:)";
    rect = "";
    }
}