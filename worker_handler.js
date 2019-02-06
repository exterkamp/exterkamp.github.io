if (window.Worker) {
	// Requires script name as input
	var spotifyWorker = new Worker("api_worker.js");

	spotifyWorker.onmessage = function(e) {
        // make sure the container is hidden
        let container = document.querySelector("#spotify-container");  
        container.hidden = true;
        //document.querySelector("#spotify-plugin").hidden = true;
        // set the albums
        let spotify_json = e.data;
        let update_time = new Date(parseInt(spotify_json['update_time']))
            .toLocaleDateString("en-US", {weekday: 'long', hour: 'numeric', minute: 'numeric'});
        document.querySelector('#spotify-header').innerHTML =
            `Like music?  Here's what I'm listening to right now:`;
        // document.querySelector('#spotify-footer').innerHTML =
        //     `(Updated: ${update_time})`;
        // console.log(spotify_json)
              
        for (var idx in spotify_json){
            let track = spotify_json[idx]
            let t = document.querySelector('#spotify-track');
            let clone = document.importNode(t.content, true);
            clone.querySelector('.spotify-song').innerHTML = track.name
            clone.querySelector('.spotify-album').innerHTML = track.album
            clone.querySelector('.spotify-artist').innerHTML = "by " + track.artists.map(x => x.name).reduce((x, y) => x + " & " + y)
            clone.querySelector('.spotify-link').setAttribute("href", track.spotify_url);
            clone.querySelector('#spotify-uri').innerHTML = track.uri
            let albumImg = clone.querySelector('.spotify-album-img');
            // albumImg.setAttribute("src","data:image/jpg;base64," + track.album_art_encoded);
            // make callback for last img to unhide the container
            if (idx == spotify_json.length - 1) {
                albumImg.onload = function() {
                    // this will run when the image is ready
                    // document.querySelector("#spotify-plugin").hidden = false;
                    container.hidden = false
                }
            }
            albumImg.setAttribute("src", track.album_art_url);
            albumImg.setAttribute("alt","Album cover for: " + track.album);
            container.appendChild(clone);
        }
    }
    
    // postMessage to the SW
    spotifyWorker.postMessage("https://exterkamp-spotify-recents.appspot.com/tracks");

    // add button handler to reload the album
    document.getElementById("spotify-reload").addEventListener("click", function(){
        // delete current track
        let container = document.querySelector("#spotify-container");
        let uris = container.querySelectorAll('#spotify-uri')
        let uri_list = [];
        uris.forEach(function(uri){
            console.log(uri)
            uri_list.push(uri.innerHTML);
        });
        let count = uris.length
        container.innerHTML = ""
        spotifyWorker.postMessage(`https://exterkamp-spotify-recents.appspot.com/tracks?count=${count}&blacklist=${uri_list}`);
    });

    // add button handler to add the album
    document.getElementById("spotify-add").addEventListener("click", function(){
        // delete current track
        let container = document.querySelector("#spotify-container");
        let uris = container.querySelectorAll('#spotify-uri')
        if (uris.length < 5) {
            let uri_list = [];
            uris.forEach(function(uri){
                console.log(uri)
                uri_list.push(uri.innerHTML);
            });
            // container.innerHTML = ""
            spotifyWorker.postMessage(`https://exterkamp-spotify-recents.appspot.com/tracks?count=1&blacklist=${uri_list}`);
        }
    });

    // add button handler to remove the album
    document.getElementById("spotify-remove").addEventListener("click", function(){
        // delete current track
        let container = document.querySelector("#spotify-container");
        let tracks = container.querySelectorAll('.spotify-track')
        console.log(tracks.length)
        if (tracks.length > 1) {
            container.removeChild(tracks[tracks.length-1])
        }
    });
}