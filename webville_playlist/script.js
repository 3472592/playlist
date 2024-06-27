var position = 0; // keep track of video that is being played
var playlist; // holds video playlist
var video; // holds refference to video element

window.onload = function() {
    playlist = ["../video/preroll", 
            "../video/areyoupopular", 
            "../video/destinationearth"];
    video = document.getElementById("video");                    

    video.src = playlist[position] + getFormatExtension(); // will take position 0 from playlist
    video.load();
    video.play();


    video.addEventListener("ended", nextVideo, false); // if video ends go to our event handler function
};

function nextVideo() {
    position++; // incriment position if video at playlist at position 0 have ended
    if (position >= playlist.length) { // if position is greater or equal to playlist len, go back to pos 0
        position = 0;
    }
    video.src = playlist[position] + getFormatExtension(); // that where position 1 or greater(depends) comes to play
    video.load();
    video.play();
}
                                                                                                                                         
//if canPlayType method get "maybe" from at least one going to use fotmat extension that browser "maybe" supports 
function getFormatExtension() {
    if (video.canPlayType("video/mp4") != "") {
        return ".mp4";
    } else if (video.canPlayType("video/ogg") != "") {
        return ".ogv";
    } else if (video.canPlayType("video/webm") != "") {
        return ".webm";
    }
}
