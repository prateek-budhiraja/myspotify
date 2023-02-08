import React from "react";
import SidebarItem from "./SidebarItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useStateValue } from "../context/AppContext";

function Sidebar({ setDefaultPlaylist }) {
	const [{ playlists }] = useStateValue();

	return (
		<div className="col-span-2 bg-black min-h-[100dvh] px-2 ">
			<img
				className="h-[100px] py-4 cursor-pointer"
				src="images/spotify.jpg"
				alt="logo"
			/>
			<SidebarItem title="Home" Icon={HomeOutlinedIcon} />
			<SidebarItem title="Search" Icon={SearchIcon} />
			<SidebarItem title="Your Library" Icon={LibraryMusicIcon} />
			<p className="text-white font-sm mt-3 font-semibold px-3">Playlist</p>
			<hr className="w-[90%] mx-auto mt-3 text-gray-500" />

			{playlists?.items?.map((playlist) => (
				<SidebarItem
					title={playlist.name}
					key={playlist.id}
					playlistId={playlist.id}
					setDefaultPlaylist={setDefaultPlaylist}
				/>
			))}
		</div>
	);
}

export default Sidebar;
