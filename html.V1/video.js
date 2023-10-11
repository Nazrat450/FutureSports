const playButton = document.getElementById("play-button");
const youtubeVideo = document.getElementById("youtube-video");

playButton.addEventListener("click", () => {
    // Play the video by setting the source to the same URL with autoplay parameter
    youtubeVideo.src = "https://www.youtube.com/watch?v=bcBrnTm_6uw";
    
    // Hide the play button after playing
    playButton.style.display = "none";
});