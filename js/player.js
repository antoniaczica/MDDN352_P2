
// Constants

// List relates the url provided name with the title and soundcloud url
var audioList = [
	{
		id: "shitsfucked",
		title: "Everybody Knows Shit's Fucked",
		url: ""
	},
	{
		id: "huria1",
		title: "The Portrait of Huria Matenga",
		url: ""
	},
	{
		id: "huria2",
		title: "The Cloak of Huria Matenga",
		url: ""
	},
	{
		id: "kupeanchor",
		title: "Kupe’s Anchor",
		url: ""
	},
	{
		id: "kuri",
		title: "The Kuri",
		url: ""
	},
	{
		id: "bluewhale",
		title: "The Blue Whale Heart",
		url: ""
	},
	{
		id: "pharlap",
		title: "Phar Lap",
		url: ""
	}

];

var pageId = getUrlParameter("exhibit");
console.log(pageId);

// Source for following solution
// http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js

var getUrlParameter = function getUrlParameter(sParam) {
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