import { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { getUserToken } from "./services/spotify.js";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./context/AppContext";
import dispatchAction from "./utils/dispatchAction";

const spotify = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getUserToken();
		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			dispatch({
				type: dispatchAction.SET_TOKEN,
				token: _token,
			});

			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				dispatch({
					type: dispatchAction.SET_SPOTIFY,
					spotify,
				});
				dispatch({
					type: dispatchAction.SET_USER,
					user,
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: dispatchAction.SET_PLAYLISTS,
					playlists,
				});
			});
		}
	}, []);

	return <>{token ? <Dashboard /> : <Login />}</>;
}

export default App;
