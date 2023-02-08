import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/AppContext";
import dispatchAction from "../utils/dispatchAction";
import Header from "./Header";
import Song from "./Song";

function Body({ defaultPlaylist }) {
	console.log(defaultPlaylist);
	return (
		<div className="p-4 col-span-8 bg-[#5b5773] bg-gradient-to-b from-transparent to-sblack">
			<Header />
			{defaultPlaylist ? (
				<>
					<div className="flex gap-5 text-white items-end px-2 mt-10">
						<img
							className="w-[250px]"
							src={defaultPlaylist?.images[0].url}
							alt=""
						/>
						<div className="pb-1">
							<h3 className="text-sm mb-6">PLAYLIST</h3>
							<h1 className="text-6xl font-bold mb-3">
								{defaultPlaylist?.name}
							</h1>
							<h4>{defaultPlaylist?.description}</h4>
						</div>
					</div>

					<div className="mt-5 grid grid-cols-4 cursor-default mb-2 text-white">
						<div className="col-span-2 px-2">Track#</div>
						<div>Album</div>
						<div className="pr-2 justify-self-end">Duration</div>
					</div>
					<hr className="mt-1 mb-4 mx-auto" />
					{defaultPlaylist?.tracks?.items.map((song) => (
						<Song song={song} />
					))}
				</>
			) : (
				""
			)}
		</div>
	);
}

export default Body;
