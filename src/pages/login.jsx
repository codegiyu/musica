import React from "react";
import "../index.css";
import { loginEndpoint } from "../app/spotify/spotify";


const Login = () => {
    const removeToken = () => localStorage.removeItem("token")
    return (
        <div className="w-full h-screen bg-darkAlt flex items-center justify-center px-6">
            <div className="flex flex-col gap-8 items-center max-w-xs">
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" className="w-full" />
                <a href={ loginEndpoint } >
                    <button onClick={removeToken} className="bg-white py-4 px-12 rounded-[32px] text-lg font-bold text-dark uppercase">
                        Log in
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Login