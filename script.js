const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompts the user to select a media stream, pass to video element, then play

async function selectMediaStream() {
   try {
    // const that holds the media stream data which awaits until the user picks which screen is needed
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // passed in the the media stream into the video element
    videoElement.srcObject = mediaStream;
    //waits for the metadata to be loaded then call the arrow function to play the video. 
    videoElement.onloadedmetadata = () => {
        videoElement.play();
    }

}
    catch (error) {
    // catches any errors
    console.log("throwing and error @ selectMediaStream")
} 
}

button.addEventListener('click', async () => {
    // Disables the button when we click on it
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();

    button.disabled = false;
});

//on Load

selectMediaStream();

