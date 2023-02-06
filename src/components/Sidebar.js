import React from "react";
import SidebarItem from "./SidebarItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

function Sidebar() {
	return (
		<div className="col-span-2 bg-black h-[100dvh] px-2">
			<img
				className="h-[100px] py-4 cursor-pointer"
				src="images/spotify.jpg"
				alt="logo"
			/>
			<SidebarItem title="Home" Icon={HomeOutlinedIcon} />
			<SidebarItem title="Search" Icon={SearchIcon} />
			<SidebarItem title="Your Library" Icon={LibraryMusicIcon} />
		</div>
	);
}

export default Sidebar;
