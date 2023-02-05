import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { getUserToken } from "./services/spotify.js";

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const result = getUserToken();
		if (result.access_token) {
			setUser(result);
		}
		window.location.hash = "";
	}, []);

	return <>{user ? <Dashboard /> : <Login />}</>;
}

export default App;
