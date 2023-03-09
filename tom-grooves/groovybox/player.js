var player;
		function onYouTubePlayerAPIReady() {
			player = new YT.Player('player', {
				height: '360',
				width: '640',
				videoId: '', // set to empty string to load video by URL
				playerVars: {
					'autoplay': 1,
					'controls': 0,
					'modestbranding': 1,
					'rel': 0,
					'showinfo': 0
				},
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				}
			});
		}

		function playRandomVideo() {
			var randomIndex = Math.floor(Math.random() * videoUrls.length);
			player.loadVideoByUrl(videoUrls[randomIndex].url);
		}

		function onPlayerReady(event) {
			event.target.playVideo();
		}

		function onPlayerStateChange(event) {
			if (event.data == YT.PlayerState.ENDED) {
				playRandomVideo();
			}
		}
		
