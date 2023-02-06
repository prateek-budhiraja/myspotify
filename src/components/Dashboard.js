import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Dashboard() {
	return (
		<>
			<div className="grid grid-cols-10">
				<Sidebar />
				<Body />
			</div>
			<Footer />
		</>
	);
}

export default Dashboard;
