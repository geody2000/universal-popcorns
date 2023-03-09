var player;

function onYouTubePlayerAPIReady() {
	player = new YT.Player('player', {
		height: '360',
		width: '640',
		playerVars: {
			'autoplay': 1,
			'controls': 0,
			'showinfo': 0,
			'rel': 0,
			'modestbranding': 1
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerReady(event) {
	playRandomVideo();
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		playRandomVideo();
	}
}

function playRandomVideo() {
	var randomVideo = videos[Math.floor(Math.random() * videos.length)];
	player.loadVideoById(randomVideo.id);
	document.title = randomVideo.title;
}
