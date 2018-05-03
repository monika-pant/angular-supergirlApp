navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia ||
navigator.mediaDevices.webkitGetUserMedia || navigator.mediaDevices.mozGetUserMedia;

var constraints = {audio: true, video: { width: 320, height: 480 } };

navigator.mediaDevices.getUserMedia(constraints)
.then(function(localMediaStream){
    var video = document.querySelector('video');
    video.srcObject = localMediaStream;
    video.onloadedmetadata = function(e) {
      video.play();
    };
})
.catch(function(err){
    console.log(err.name + ": " + err.message);
});
// console.log("localMediaStream");