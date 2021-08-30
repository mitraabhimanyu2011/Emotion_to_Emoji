Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'/>";
    });
}

console.log("ml5 cersion:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8r85e8Nu4/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model has successfully been loaded!!!");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "My first prediction of your expression is " + prediction_1 + ".";
    speak_data_2 = "My second prediction is " + prediction_2 + ".";
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

