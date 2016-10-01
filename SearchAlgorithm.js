



  var searchResults = document.getElementById("response");
  var albums = [];

function displaySearchResult() {
    albums.sort(compareSearch);
    var output = document.getElementById("response");
    var formInput = document.getElementById("formInput").value.trim();

    for (var i = 0; i < albums.length; i += 1) {
        if (albums[i].artist === formInput) {
            output.value = formInput + " , " + albums[i].title + " " + albums[i].artist;
        }
    }
}
function addAlbum(title, artist, category, tracks) {
      var album = {
          "title": title,
          "artist": artist,
          "category": category,
          "tracks": tracks
      };
      //push album into array
      albums.push(album);
  }
  //add albums
  addAlbum("Electric LadyLand", "Jimi Hendrix", "Classic Rock", [1, 2, 3]);
  addAlbum("The Wall", "Pink Floyd", "Classic Rock", [1, 2, 3]);
  addAlbum("Bootsy", "Bootsy Collins", "Funk", [1, 2, 3]);
  addAlbum("Paul's Boutique", "Beastie Boys", "Rap", [1, 2, 3]);
