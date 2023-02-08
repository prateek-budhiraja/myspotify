import React from "react";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "../context/AppContext";

function Header() {
	const [{ user }] = useStateValue();
	return (
		<div className="text-white flex justify-between items-center gap-5">
			<div className="bg-white w-[50%] min-w-[100px] text-black py-1 px-4 rounded-full flex">
				<SearchIcon className="mr-1" />
				<input
					className="w-[100%] focus:outline-none"
					type="text"
					placeholder="Search song, artist or podcast"
				/>
			</div>
			<div className="flex items-center gap-4 min-w-[200px]">
				<Avatar src={user?.images[0]?.url} alt="profile" />
				<h4 className="font-semibold">{user?.display_name}</h4>
			</div>
		</div>
	);
}

export default Header;
