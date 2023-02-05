import React from "react";
import { spotifyAuthUrl } from "../services/spotify.js";

function Login() {
	return (
		<div className="h-[100dvh] w-[100dvw] flex flex-col justify-evenly bg-black">
			<img
				src="/images/spotify.jpg"
				alt="spotify logo"
				className="mx-auto md:w-[40%] w-[80%]"
			/>
			<p className="text-center">
				<a
					className="p-3 px-6 bg-green rounded-full font-semibold text-white mx-auto"
					href={spotifyAuthUrl}
				>
					Login with Spotify
				</a>
			</p>
		</div>
	);
}

export default Login;
