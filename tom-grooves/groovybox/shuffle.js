// List of video URLs
var videoUrls = [
  {
    url: 'https://www.youtube.com/watch?v=SAa4teWb0rU',
    title: 'Ella Fitzgerald - Blue Skies'
  },
  {
    url: 'https://www.youtube.com/watch?v=EahKmJ4-tjY',
    title: 'Ella Fitzgerald - The Lady Is A Tramp'
  },
  {
    url: 'https://www.youtube.com/watch?v=r1C69fzfGBM',
    title: 'Doris Day - Que Sera, Sera (Whatever Will Be, Will Be)'
  },
  {
    url: 'https://www.youtube.com/watch?v=wmRHeKF2kdU',
    title: 'Dean Martin - Everybody Loves Somebody'
  },
  {
    url: 'https://www.youtube.com/watch?v=-UbpcAqRowU',
    title: 'Perry Como - Killing Me Softly With Her Song'
  },
  {
    url: 'https://www.youtube.com/watch?v=TR1Y1qxkbLE',
    title: 'The Carpenters - Superstar'
  },
  {
    url: 'https://www.youtube.com/watch?v=V6MvuFGEapo',
    title: 'John Denver - Leaving On A Jet Plane'
  },
  {
    url: 'https://www.youtube.com/watch?v=c0dvabcWVo0',
    title: 'John Denver - Take Me Home, Country Roads (Original Version)'
  },
  {
    url: 'https://www.youtube.com/watch?v=YkLLcIKhJ64',
    title: 'ABBA - Dancing Queen'
  },
  {
    url: 'https://www.youtube.com/watch?v=KMViJKmAV4M',
    title: 'ABBA - Mamma Mia'
  },
  {
    url: 'https://www.youtube.com/watch?v=WbnG3eAGb6Y',
    title: 'ABBA - The Winner Takes It All'
  },
  {
    url: 'https://www.youtube.com/watch?v=GKdl-GCsNJ0',
    title: 'The Beatles - Here Comes The Sun (2019 Mix)'
  },
  {
    url: 'https://www.youtube.com/watch?v=BdEe5SpdIuo',
    title: 'Elton John - Rocket Man (I Think It\'s Going To Be A Long, Long Time)'
  },
  {
    url: 'https://www.youtube.com/watch?v=H6M0EulApMM',
    title: 'Billy Joel - Uptown Girl'
  },
  {
    url: 'https://www.youtube.com/watch?v=3cKtSlsYVEU',
    title: 'Earth, Wind & Fire - September'
  },
  {
    url: 'https://www.youtube.com/watch?v=bJ8Sz8CJY5g',
    title: 'ELO - Mr. Blue Sky'
  },
  {
    url: 'https://www.youtube.com/watch?v=xNDRrpG1Gc4',
    title: 'Gloria Gaynor - I Will Survive'
  },
  {
    url: 'https://www.youtube.com/watch?v=kvazBqAlx58',
    title: 'Paul Anka - Put Your Head On My Shoulder'
  },
  {
    url: 'https://www.youtube.com/watch?v=DYwQy_9JPtQ',
    title: 'Frankie Valli And The Four Seasons - Can\'t Take My Eyes Off You'
  },
  {
    url: 'https://www.youtube.com/watch?v=le1QF3uoQNg',
    title: 'Frank Sinatra - Theme From New York, New York (2008 Remastered)'
  },
  {
    url: 'https://www.youtube.com/watch?v=kbRindAErlo',
    title: 'Dean Martin - That\'s Amore'
  },
  {
    url: 'https://www.youtube.com/watch?v=8WyfVoFM9As',
    title: 'ABBA -  Chiquitita'
  }
  // add more videos here
];


// Shuffle the videos initially
var shuffledUrls = shuffle(videoUrls);

// Current video index
var currentVideoIndex = 0;

// YouTube player object
var player;

// Shuffle the videos array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle
  while (0 !== currentIndex) {

    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Load the YouTube player API asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// When YouTube player API is ready, create the player
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    playerVars: {
      'controls': 1,
      'modestbranding': 1,
      'rel': 0,
      'fs': 0,
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError
    }
  });
}

// When player is ready, load the first video
function onPlayerReady(event) {
  event.target.loadVideoByUrl(shuffledUrls[currentVideoIndex]);
}

// When video ends, load the next video
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    currentVideoIndex++;
    if (currentVideoIndex >= shuffledUrls.length) {
      currentVideoIndex = 0;
      shuffledUrls = shuffle(shuffledUrls);
    }
    player.loadVideoByUrl(shuffledUrls[currentVideoIndex]);
  }
}

// Handle errors
function onPlayerError(event) {
  if (event.data === 100 || event.data === 101 || event.data === 150) {
    console.log("Skipping video: " + shuffledUrls[currentVideoIndex] + ", reason: " + event.data);
    shuffledUrls.splice(currentVideoIndex, 1);
    if (currentVideoIndex >= shuffledUrls.length) {
      currentVideoIndex = 0;
      shuffledUrls = shuffle(shuffledUrls);
    }
    player.loadVideoByUrl(shuffledUrls[currentVideoIndex]);
  }
}









