import React from "react";

function Song({ song }) {
	function millisToMinutesAndSeconds(millis) {
		var minutes = Math.floor(millis / 60000);
		var seconds = ((millis % 60000) / 1000).toFixed(0);
		return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
	}
	return (
		<div className="grid grid-cols-4 cursor-default">
			<div className="flex mb-3 px-2 gap-4 items-center col-span-2">
				<img
					className="w-[45px]"
					src={song?.track?.album?.images[0]?.url}
					alt=""
				/>
				<div>
					<h2 className="text-white font-semibold leading-4 cursor-pointer w-[100%] text-clip h-[15px] overflow-hidden">
						{song?.track?.name}
					</h2>
					<span className="text-gray-400 text-xs">
						{song?.track?.artists?.map((artist) => `${artist.name}, `)}
					</span>
				</div>
			</div>
			<div className="w-[100%] text-clip h-[25px] overflow-hidden">
				<span className="text-white">{song?.track?.album?.name}</span>
			</div>
			<div className="justify-self-end pr-4">
				<span className="text-white">
					{millisToMinutesAndSeconds(song?.track?.duration_ms)}
				</span>
			</div>
		</div>
	);
}

export default Song;
