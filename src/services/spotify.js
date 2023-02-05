/**
 * Constants used for spotify login API
 **/
const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = process.env.REACT_APP_clientId;
const redirectUri = process.env.REACT_APP_redirectUri;
const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

/**
 * Actual spotify authentication url
 **/
let spotifyAuthUrl = `${authEndpoint}`;
spotifyAuthUrl += `?client_id=${clientId}`;
spotifyAuthUrl += `&redirect_uri=${redirectUri}`;
spotifyAuthUrl += `&scope=${scopes.join("%20")}`;
spotifyAuthUrl += `&response_type=token`;
spotifyAuthUrl += `&show_dialog=false`;

/**
 * @description: returns user token after extracting it from the url
 * @returns: User token if exists else null
 **/
const getUserToken = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((user, item) => {
			let value = item.split("=");
			user[value[0]] = decodeURIComponent(value[1]);
			return user;
		}, {});
};

export { spotifyAuthUrl, getUserToken };
