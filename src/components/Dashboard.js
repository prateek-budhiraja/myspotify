import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Dashboard({ defaultPlaylist, setDefaultPlaylist }) {
	return (
		<>
			<div className="grid grid-cols-10">
				<Sidebar setDefaultPlaylist={setDefaultPlaylist} />
				<Body defaultPlaylist={defaultPlaylist} />
			</div>
			<Footer song={defaultPlaylist?.tracks?.items[0]} />
		</>
	);
}

export default Dashboard;
