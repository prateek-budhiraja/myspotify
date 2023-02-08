import React from "react";
import { useStateValue } from "../context/AppContext";
import dispatchAction from "../utils/dispatchAction";

function SidebarItem({ title, Icon, playlistId, setDefaultPlaylist }) {
	const [{ spotify }, dispatch] = useStateValue();
	const handleSetPlaylist = () => {
		spotify.getPlaylist(playlistId).then((response) => {
			setDefaultPlaylist(response);
		});
	};
	return (
		<div className="px-1">
			{Icon ? (
				<div className="flex cursor-pointer gap-2 hover:text-white text-gray-500">
					<Icon />
					<h4 className="h-[35px] font-semibold ">{title}</h4>
				</div>
			) : (
				<p
					className="w-[100%] text-clip h-[25px] overflow-hidden px-2 mt-3 hover:text-white cursor-pointer text-gray-500"
					onClick={handleSetPlaylist}
				>
					{title}
				</p>
			)}
		</div>
	);
}

export default SidebarItem;
