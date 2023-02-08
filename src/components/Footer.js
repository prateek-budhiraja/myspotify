import React from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LoopIcon from "@mui/icons-material/Loop";
import { Slider, Stack } from "@mui/material";
import { VolumeUp } from "@mui/icons-material";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";

function Footer({ song }) {
	return (
		<div className="flex items-center fixed bottom-0 left-0 h-[75px] w-[100dvw] bg-sblack text-white justify-between">
			<div className="flex-auto flex w-[30%] px-4 items-center">
				<img
					className="w-[50px] h-[50px] object-cover mr-3"
					src={song ? song?.track?.album?.images[0].url : ""}
					alt=""
				/>
				<div>
					<h4 className="leading-3">
						{song ? song?.track?.name : "Song name"}
					</h4>
					<span className="text-xs">
						{song ? song?.track?.artists[0].name : "Singer"}
					</span>
				</div>
			</div>
			<div className="flex-auto w-[40%]">
				<div className="max-w-[350px] mx-auto flex justify-between items-center">
					<ShuffleIcon />
					<SkipPreviousIcon />
					<PlayCircleOutlineOutlinedIcon className="scale-150" />
					<SkipNextIcon />
					<LoopIcon />
				</div>
			</div>
			<div className="flex-none w-[30%] px-5">
				<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
					<DevicesOtherIcon />
					<VolumeUp />
					<Slider aria-label="Volume" size="small" className="w-10" />
				</Stack>
			</div>
		</div>
	);
}

export default Footer;
