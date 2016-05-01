
// Constants

// List relates the url provided name with the title and soundcloud url
var audioList = [
	{
		id: "huria1",
		title: "The Portrait of Huria Matenga",
		url: "'http://www.w3schools.com/html/horse.mp3'"
	},
	{
		id: "huria2",
		title: "The Cloak of Huria Matenga",
		url: "'http://www.w3schools.com/html/horse.mp3'"
	},
	{
		id: "kupeanchor",
		title: "Kupe’s Anchor",
		url: "'http://www.w3schools.com/html/horse.mp3'"
	},
	{
		id: "kuri",
		title: "The Kuri",
		url: "'http://www.w3schools.com/html/horse.mp3'"
	},
	{
		id: "bluewhale",
		title: "The Blue Whale Heart",
		url: "'http://www.w3schools.com/html/horse.mp3'"
	},
	{
		id: "pharlap",
		title: "Phar Lap",
		url: "'https://s3-ap-southeast-2.amazonaws.com/mddn352p2/pharlap.mp3'"
	}

];

// FUNCTIONS THAT ARE BEING CALLED
var pageId = getUrlParameter("exhibit");
var exhibit = getExhibit(pageId);
console.log(exhibit);

// Fill Header
$( "h1.exhibit-name" ).text( exhibit.title );

//Fill Audio
$( "audio" ).html("<source src="+exhibit.url+"type='audio/mpeg'/>");


// END FUNCTIONS THAT ARE BEING CALLED


// Source for following solution
// http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js

function getExhibit(id) {
	for (var i = 0; i < audioList.length; i++) {
		if (audioList[i].id == id){
			return audioList[i];
		}
	}
	console.log("id is not within audioList, returning default object");
	return {
		id: "brokenurl",
		title: "Broken URL",
		url: ""
	}
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};