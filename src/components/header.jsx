import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../index.css";
import logo from "../img/logo.svg";
import menu from "../img/menu.svg";
import search from "../img/search.svg";
import home from "../img/nav-home.svg";
import homeActive from "../img/nav-home-active.svg";
import playlist from "../img/nav-playlist.svg";
import playlistActive from "../img/nav-playlist-active.svg";
import radio from "../img/nav-radio.svg";
import videos from "../img/nav-videos.svg";
import profile from "../img/nav-profile.svg";
import logout from "../img/nav-logout.svg";

const Header = ({ props }) => {
    let {activePage} = props;
    let [menuState, setMenuState] = useState(false)

    const toggleMenu = () => {
        setMenuState(!menuState)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="relative py-6 bg-transparent text-mutedText text-[15px] font-bold ">
            <div className="flex items-center justify-between lg:justify-start ">
                <div className="menu-logo flex mr-3">
                    <img src={ menu } alt="menu" className="lg:hidden mr-3 w-7" onClick={toggleMenu} />
                    <Link to="/">
                        <img src={ logo } alt="logo" className="w-[34px]" />
                    </Link>
                </div>
                <form className="flex items-center py-1 lg:ml-12 flex-grow" onSubmit={ handleSubmit } method="post">
                    <input type="search" name="searchMobile" placeholder="Search artists"
                        className="outline-0 order-1 lg:order-2 flex-grow border-none bg-inherit px-5 text-right lg:text-left
                        placeholder:text-sm placeholder:font-semibold placeholder:text-[#FFFFFF25]" 
                    />
                    <button type="submit" className="bg-inherit order-2 lg:order-1 outline-0 px-1">
                        <img src={ search } alt="logo" className="w-7" />
                    </button>
                </form>
            </div>
            <div className={`menu-pane z-[100] transition-all absolute ${menuState ? "translate-x-0" : "translate-x-full "} right-[-1.1rem] top-0 w-4/5 h-[500px] px-6 pt-24 bg-dark lg:hidden`}>
                <nav>
                    <ul className="flex flex-col gap-8">
                        <Link to="/"><li className="flex gap-7 items-center">
                            { activePage === "home" 
                                ? <img src={ homeActive } alt="home" className="w-5" /> 
                                : <img src={ home } alt="home" className="w-5" />
                            }
                            <p className={ activePage === "home" ? "text-white" : "text-mutedText" }>Home</p>
                        </li></Link>
                        <Link to="/collections"><li className="flex gap-7 items-center">
                            { activePage === "playlist" 
                                ? <img src={ playlistActive } alt="home" className="w-6" /> 
                                : <img src={ playlist } alt="home" className="w-6" />
                            }
                            <p className={ activePage === "playlist" ? "text-white" : "text-mutedText" }>My collections</p>
                        </li></Link>
                        <li className="flex gap-7 items-center">
                            <img src={ radio } alt="home" className="w-6" />
                            <p className="">Radio</p>
                        </li>
                        <li className="flex gap-7 items-center">
                            <img src={ videos } alt="home" className="w-6" />
                            <p className="">Music videos</p>
                        </li>
                        <li className="flex gap-7 items-center">
                            <img src={ profile } alt="home" className="w-6" />
                            <p className="">Profile</p>
                        </li>
                        <li className="flex gap-7 items-center">
                            <img src={ logout } alt="home" className="w-6" />
                            <p className="">Log out</p>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}

export default Header