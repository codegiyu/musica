import React from "react";
// import { Outlet, Link } from "react-router-dom";
import "../index.css";
import useStore from "../app/zustand/store";
import playTriangle from "../img/play-triangle.svg";
import next from "../img/next.svg";
import repeat from "../img/repeat.svg";
import shuffle from "../img/shuffle.svg";
import volumeImg from "../img/volume.svg";


const BottomPlay = ({props}) => {
    let {max, setPlaytime, setVolume} = props

    let playtime = useStore((state) => state.playtime)
    let volume = useStore((state) => state.volume)
    let nowPlaying = useStore((state) => state.nowPlaying)
   
    const handlePlaytime = (e) => {
        // console.log(useStore())
       return setPlaytime(e.target.value)
    }
    const handleVolume = (e) => setVolume(e.target.value)

    let playtimeStyle = {
        width: `${(playtime / max) * 100}%`
    }

    let volumeStyle = {
        width: `${volume}%`
    }

    console.log(useStore())

    return (
        <div className="flex items-center justify-between py-6 pl-2 pr-6 bg-transparent">
            <div className="flex items-center gap-2 lg:w-[25%]">
                <img src={ nowPlaying.image } alt="now playing" className="w-[58px] lg:w-[50px] aspect-square rounded-[16px]" />
                <div className="font-bold text-white flex flex-col gap-0">
                    <p className="text-base lg:text-sm leading-5">{ nowPlaying.trackName }</p>
                    <p className="text-xs lg:text-[10px] leading-[14px] opacity-[0.44]">{ nowPlaying.artist }</p>
                </div>
            </div>
            <div className="flex gap-6 lg:hidden">
                <div className="rounded-full bg-gold flex items-center justify-center w-[34px] aspect-square">
                    <img src={ playTriangle } alt="play" className="w-[11px]" />
                </div>
                <img src={ next } alt="next" className="w-[22px]" />
            </div>
            <div className="hidden lg:flex flex-col gap-3 w-[65%]">
                <div className="flex justify-center items-center gap-8">
                    <img src={ shuffle } alt="play" className="w-[16px]" />
                    <img src={ next } alt="play" className="w-[16px]" />
                    <div className="rounded-full bg-gold flex items-center justify-center w-[25px] aspect-square">
                        <img src={ playTriangle } alt="play" className="w-[8px]" />
                    </div>
                    <img src={ next } alt="play" className="w-[16px]" />
                    <img src={ repeat } alt="play" className="w-[16px]" />
                </div>
                <div className="relative z-[1]">
                    <input type="range" name="playtime" min={0} max={max} step={1} value={playtime} 
                    onChange={handlePlaytime}
                        className="playtime w-full appearance-none h-1 bg-[#FFFFFF04] z-[20] cursor-pointer" />
                    <div className="h-1 rounded-sm bg-gold absolute top-[14px]" style={playtimeStyle}></div>
                </div>
                
            </div>
            <div className="hidden lg:flex items-center gap-2 w-[15%]">
                <img src={ volumeImg } alt="volume" className="w-[18px] flex-none" />
                <div className="w-auto flex-grow relative z-[1] flex flex-col">
                    <input type="range" name="volume" min={0} max={100} step={1} value={volume} 
                    onChange={handleVolume}
                        className=" h-1 appearance-none bg-[#FFFFFF04] z-[20] cursor-pointer" />
                    <div className="h-1 rounded-sm bg-gold absolute top-[0px]" style={volumeStyle}></div>
                </div>
                
            </div>
        </div>
    )
}

export default BottomPlay