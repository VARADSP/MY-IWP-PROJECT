/*jslint sub: true, maxerr: 50, indent: 4, browser: true */
/*global */

(function() {
    "use strict";

    //create variables for my buttons, variable for output, and declare albums array
    var search = document.getElementById("search");
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var b4 = document.getElementById("search");
    var results = document.getElementById("albums");
    var searchResults = document.getElementById("response");

    var albums = [];

    //make a constructor to refrence my albums
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

    //build a function that compares all the album titles
    function compareTitle(a, b) {
        if (a.title < b.title) {
            return -1;
        }

        if (a.title > b.title) {
            return 1;
        }

        return 0;
    }

    //compare all the artists
    function compareArtist(a, b) {
        if (a.artist < b.artist) {
            return -1;
        }

        if (a.artist > b.artist) {
            return 1;
        }

        return 0;
    }

    //compare all the category
    function compareCategory(a, b) {
        if (a.category < b.category) {
            return -1;
        }

        if (a.category > b.category) {
            return 1;
        }

        return 0;
    }

    //function to display albums inner HTML
    function displayAll() {
        results.innerHTML = "";
        albums.sort(compareTitle);

        //create variables foreach table row and column
        albums.forEach(function(album) {
            var tr = document.createElement("tr"),
                td1 = document.createElement("td"),
                td2 = document.createElement("td"),
                td3 = document.createElement("td"),
                td4 = document.createElement("td");

            //fill table with sorted data
            td1.textContent = album.title;
            td2.textContent = album.category;
            td3.textContent = album.artist;
            td4.textContent = album.tracks.toString();

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            results.appendChild(tr);
        });
    }

    function displayArtist() {
        results.innerHTML = "";
        albums.sort(compareArtist);

        albums.forEach(function(album) {
            var tr = document.createElement("tr"),
                td1 = document.createElement("td"),
                td2 = document.createElement("td"),
                td3 = document.createElement("td"),
                td4 = document.createElement("td");

            td1.textContent = album.title;
            td2.textContent = album.category;
            td3.textContent = album.artist;
            td4.textContent = album.tracks.toString();

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            results.appendChild(tr);
        });
    }

    function displayCategory() {
        results.innerHTML = "";
        albums.sort(compareCategory);

        albums.forEach(function(album) {
            var tr = document.createElement("tr"),
                td1 = document.createElement("td"),
                td2 = document.createElement("td"),
                td3 = document.createElement("td"),
                td4 = document.createElement("td");

            td1.textContent = album.title;
            td2.textContent = album.category;
            td3.textContent = album.artist;
            td4.textContent = album.tracks.toString();

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            results.appendChild(tr);
        });
    }

    //build a function that compares user search to array
    function compareSearch(a, b) {
        if (a.artist < b.artist) {
            return -1;
        }

        if (a.artist > b.artist) {
            return 1;
        }

        return 0;
    }

    //function to display artist info inner HTML if in array
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

    //add event listeners for the buttons
    b1.addEventListener("click", displayAll, false);
    b2.addEventListener("click", displayArtist, false);
    b3.addEventListener("click", displayCategory, false);
    b4.addEventListener("click", displaySearchResult, false);
}());
