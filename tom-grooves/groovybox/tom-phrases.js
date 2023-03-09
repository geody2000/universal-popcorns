var tomPhrases = [
    "Howdy and how do you do. Drop a coin in the jukebox.",
    "Good time to listen to some jams.",
    "I see you're here to experience some bops.",
    "Tom is always here to help with your delicate musical needs.",
    "My picks are superb, no doubt about that.",
    "What\'s that? You want me to add more music?",
    "Yes, this is the real Tom helping you with your playlist.",
    "Whatever song you play I can play. I only need to listen to it once.",
    "Ah, you're in for some juicy tunes.",
    "What\'s groovin\', fellers? Welcome to Tom\'s podcast.",
    "Pete, fetch our visitors some music!",
    "I think we will pay some major fines for copyright infringement!",
    "This section of my site is making an awful lot of sounds.",
    "Neighbors: TURN IT DOWN, IT'S 6 AM!",
    "Alright, time to deliver some mean grooves.",
    "The song below me features a trombone. (Or not.)",
    "Tom Grooves always has a good track to recommend.",
    "The song you will play next is my ringtone. That, or I made this up.",
    "I may be running out of music. Peeete! Load more music! (This guy.)",
    "This is a curated playlist by yours truly.",
    "I actually wrote the first song that shows up. I was a ghostwriter.",
    "I hope ye dropped a coin in the jukebox. Ye're not a pirate, are ye?"
]


var randomIndex = Math.floor(Math.random() * tomPhrases.length);
var randomPhrase = tomPhrases[randomIndex];

var tomRandomPhrase = document.getElementById("tom-random-phrase");
tomRandomPhrase.innerHTML = randomPhrase;
