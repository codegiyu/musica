import React from "react";
// import { Outlet, Link } from "react-router-dom";
import "../index.css";
import releasesImg from "../img/releasesImg.png";
import playTriangle from "../img/play-triangle.svg";
import next from "../img/next.svg";


const BottomPlay = () => {
    return (
        <div className="flex items-center justify-between py-6 pl-2 pr-6 bg-transparent">
            <div className="flex items-center gap-2">
                <img src={ releasesImg } alt="now playing" className="w-[58px] aspect-square rounded-[16px]" />
                <div className="font-bold text-white flex flex-col gap-0">
                    <p className="text-base leading-5">Seasons in</p>
                    <p className="text-xs leading-[14px] opacity-[0.44]">James</p>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="rounded-full bg-gold flex items-center justify-center w-[34px] aspect-square">
                    <img src={ playTriangle } alt="play" className="w-[11px]" />
                </div>
                <img src={ next } alt="next" className="w-[22px]" />
            </div>
        </div>
    )
}

export default BottomPlay