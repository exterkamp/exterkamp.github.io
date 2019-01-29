if (window.Worker) {
	// Requires script name as input
	var spotifyWorker = new Worker("api_worker.js");

	spotifyWorker.onmessage = function(e) {
        // set the albums
        let spotify_json = e.data;
        let update_time = new Date(parseInt(spotify_json['update_time']))
            .toLocaleDateString("en-US", {weekday: 'long', hour: 'numeric', minute: 'numeric'});
        document.querySelector('#spotify-header').innerHTML =
            `Like music?  Here's what I'm listening to right now:`;
        document.querySelector('#spotify-footer').innerHTML =
            `(Updated: ${update_time})`;
        for (var idx in spotify_json['tracks']){
            let track = spotify_json['tracks'][idx]
            let t = document.querySelector('#spotify-track');
            let container = document.querySelector("#spotify-container");
            let clone = document.importNode(t.content, true);
            clone.querySelector('.spotify-song').innerHTML = track.name
            clone.querySelector('.spotify-album').innerHTML = track.album
            clone.querySelector('.spotify-artist').innerHTML = "by " + track.artists.map(x => x.name).reduce((x, y) => x + " & " + y)
            clone.querySelector('.spotify-link').setAttribute("href", track.spotify_url);
            let albumImg = clone.querySelector('.spotify-album-img');
            albumImg.setAttribute("src","data:image/jpg;base64," + track.album_art_encoded);
            albumImg.setAttribute("alt","Album cover for: " + track.album);
            container.appendChild(clone);
        }
    }
    
    // postMessage to the SW
    spotifyWorker.postMessage("https://exterkamp-spotify-recents.appspot.com/recents");
}