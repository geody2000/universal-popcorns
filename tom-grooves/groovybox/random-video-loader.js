// Modify URLs to use embed links
for (var i = 0; i < videoUrls.length; i++) {
  var url = videoUrls[i].url;
  var embedUrl = url.replace('watch?v=', 'embed/');
  videoUrls[i].url = embedUrl;
}

// Change the video
function changeVideo() {
  var randomIndex = Math.floor(Math.random() * videoUrls.length);
  var randomUrl = videoUrls[randomIndex].url;
  var videoPlayer = document.getElementById("video-player");
  videoPlayer.src = randomUrl;
}

// Call changeVideo when the page loads, and when the video ends
document.addEventListener("DOMContentLoaded", () => {
  changeVideo();
  var videoPlayer = document.getElementById("video-player");
  videoPlayer.addEventListener('ended', changeVideo);
});
