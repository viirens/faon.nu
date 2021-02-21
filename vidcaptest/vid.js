

function setup() {
   
    // get stream resolution 
  var video = document.createElement('video')
  navigator.mediaDevices.getUserMedia({
      video: true
  }).then((stream) => {
      video.srcObject = stream;
      video.play()
      video.onloadedmetadata = function() {
          console.log(this.videoWidth, this.videoHeight);
      };
  })
  
 
}

function draw() {

}
