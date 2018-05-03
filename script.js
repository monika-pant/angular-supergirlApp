
var constraints = {audio: true, video: { width: 320, height: 480 } };
if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }


  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
  
      // First get ahold of the legacy getUserMedia, if present
      var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  
      // Some browsers just don't implement it - return a rejected promise with an error
      // to keep a consistent interface
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }
  
      // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
      return new Promise(function(resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    }
  }
  

navigator.mediaDevices.getUserMedia(constraints)
.then(function(localMediaStream){
    var video = document.querySelector('video');
    // Older browsers may not have srcObject
  if ("srcObject" in video) {
    video.srcObject = localMediaStream;
  } else {
    // Avoid using this in new browsers, as it is going away.
    video.src = window.URL.createObjectURL(localMediaStream);
  }
    video.onloadedmetadata = function(e) {
      video.play();
    };
})
.catch(function(err){
    console.log(err.name + ": " + err.message);
});
// console.log("localMediaStream");