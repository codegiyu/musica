import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../index.css";
import home from "../img/nav-home.svg";
import homeActive from "../img/nav-home-active.svg";
import playlist from "../img/nav-playlist.svg";
import playlistActive from "../img/nav-playlist-active.svg";
import radio from "../img/nav-radio.svg";
import videos from "../img/nav-videos.svg";
import profile from "../img/nav-profile.svg";
import logout from "../img/nav-logout.svg";


const Aside = ({props}) => {
    let {activePage} = props
    return (
        <section className="w-full ">
            <nav className="bg-darkAlt rounded-[32px] py-8 w-full flex flex-col items-center mb-6">
                <ul className="flex flex-col gap-8">
                    <Link to="/"><li className="flex gap-7 items-center">
                        { activePage === "home" 
                            ? <img src={ homeActive } alt="home" className="w-5" /> 
                            : <img src={ home } alt="home" className="w-5" />
                        }
                    </li></Link>
                    <Link to="/collections"><li className="flex gap-7 items-center">
                        { activePage === "playlist" 
                            ? <img src={ playlistActive } alt="home" className="w-6" /> 
                            : <img src={ playlist } alt="home" className="w-6" />
                        }
                    </li></Link>
                    <li className="flex gap-7 items-center">
                        <img src={ radio } alt="home" className="w-6" />
                    </li>
                    <li className="flex gap-7 items-center">
                        <img src={ videos } alt="home" className="w-6" />
                    </li>
                    
                </ul>
            </nav>
            <nav className="bg-darkAlt rounded-[32px] py-8 w-full flex flex-col items-center">
                <ul className="flex flex-col gap-8">
                    <li className="flex gap-7 items-center">
                        <img src={ profile } alt="home" className="w-6" />
                    </li>
                    <Link to="/login"><li className="flex gap-7 items-center" onClick={() => localStorage.removeItem("token")}>
                        <img src={ logout } alt="home" className="w-6" />
                    </li></Link>
                </ul>
            </nav>
            <Outlet />
        </section>
    )
}

export default Aside