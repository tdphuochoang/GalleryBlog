import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import videoBackground from "../image/background-video.mp4";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

const Login = () => {
	const user = false;
	return (
		<div className="flex justify-start items-center flex-col h-screen">
			<div className="relative w-full h-full">
				<video
					src={videoBackground}
					type="video/mp4"
					loop
					controls={false}
					muted
					autoPlay
					className="w-full h-full object-cover"
				/>

				<div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
					<div className="p-5">
						<img src="" width="130px" alt="logo" />
					</div>

					<div className="shadow-2xl">
						{user ? (
							<div>Logged In</div>
						) : (
							<GoogleLogin
								onSuccess={(response) => console.log(response)}
								onError={() => console.log("Error")}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
