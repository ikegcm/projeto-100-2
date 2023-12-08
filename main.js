Webcam.attach('#camera');

function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LBVQXVuvo/model.json', modelLoaded);

function modelLoaded() {
    console.log('model loaded!');
}

function speak() {
    var synth = window.speechSynthesis
    speakData1 = "A primira previsão é " + prediction1;
    speakData2 = "A segunda previsão é " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakData1);
    synth.speak(utterThis);

}
