import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";
import reducer, { initialState } from "./context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AppContextProvider initialState={initialState} reducer={reducer}>
			<App />
		</AppContextProvider>
	</React.StrictMode>
);
