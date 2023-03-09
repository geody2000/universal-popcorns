for (var i = 0; i < videoUrls.length; i++) {
  var url = videoUrls[i].url;
  var embedUrl = url.replace('watch?v=', 'embed/');
  videoUrls[i].url = embedUrl;
}

function changeVideo() {
  var randomIndex = Math.floor(Math.random() * videoUrls.length);
  var randomUrl = videoUrls[randomIndex].url;
  var videoPlayer = document.getElementById("video-player");
  videoPlayer.src = randomUrl;
}

document.addEventListener("DOMContentLoaded", () => {
  var videoPlayer = document.getElementById("video-player");
  changeVideo();
  videoPlayer.addEventListener('ended', changeVideo);
  document.getElementById("change-video").addEventListener("click", changeVideo);
});
