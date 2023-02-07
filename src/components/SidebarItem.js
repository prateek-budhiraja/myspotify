import React from "react";
import { useStateValue } from "../context/AppContext";
import dispatchAction from "../utils/dispatchAction";

function SidebarItem({ title, Icon, playlistId }) {
	const [{ spotify }, dispatch] = useStateValue();
	const handleSetPlaylist = () => {
		spotify.getPlaylist(playlistId).then((response) => {
			console.log(response);
			dispatch({
				type: dispatchAction.SET_CURR_PLAYLIST,
				playlist: response,
			});
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
					className="px-2 mt-3 hover:text-white cursor-pointer text-gray-500"
					onClick={handleSetPlaylist}
				>
					{title}
				</p>
			)}
		</div>
	);
}

export default SidebarItem;
