import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { getUserToken } from "./services/spotify.js";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./context/AppContext";

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getUserToken();
		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			spotify.setAccessToken(token);
			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user,
				});
			});
		}
	}, []);

	console.log("👤", user);
	console.log("👽", token);

	return <>{token ? <Dashboard /> : <Login />}</>;
}

export default App;
