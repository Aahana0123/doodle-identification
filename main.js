function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}
 
function setup(){
canvas = createCanvas(500,400);
canvas.center();
background("#7cfc80");
canvas.mouseReleased(classify_canvas);
synth=window.speechSynthesis;

}

function draw(){
strokeWeight(10);
stroke("green");

if (mouseIsPressed) {
    line(pmouseX ,pmouseY , mouseX , mouseY );
}
}

function clear_canvas(){
background("#7cfc80");
}

function classify_canvas() {
classifier.classify(canvas , gotResult);
}

function gotResult(error , results){
if (error) {
    console.log("error") 
} else {
    console.log(results)
    document.getElementById("sketch").innerHTML="Label-"+results[0].label;
    document.getElementById("confidence").innerHTML="Confidence-"+(results[0].confidence*100).toFixed(2)+"%";
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}
}