import React from "react";
import "../index.css";
import whiteHeart from "../img/white-heart.svg";
import person1 from "../img/person1.png";
import person2 from "../img/person2.png";
import person3 from "../img/person3.png";
import person4 from "../img/person4.png";
import person5 from "../img/person5.png";
import wave from "../img/wave.svg";
import coverArtist from "../img/cover-artist.svg";

const CuratedPlaylist = () => {

    return (
        <div className="bg-[#609EAF] overflow-hidden relative w-full aspect-[0.73] lg:aspect-[1.85] px-8 lg:px-12 py-8 lg:py-12 
            flex flex-col justify-between rounded-[20px] lg:rounded-[40px] text-white">
            <p className="font-normal text-xs">Curated Playlist</p>
            <div className="flex-col gap-3 hidden lg:flex w-[35%]">
                <h1 className="font-bold text-4xl">R & B Hits</h1>
                <p className="text-sm font-normal">All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
            </div>
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-3 lg:hidden">
                    <h1 className="font-bold text-4xl">R & B Hits</h1>
                    <p className="text-sm font-normal">All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex">
                        <img src={ person1 } alt="person" className="rounded-full w-[34px] z-1 m-0" />
                        <img src={ person2 } alt="person" className="rounded-full w-[34px] z-2 ml-[-17px]" />
                        <img src={ person3 } alt="person" className="rounded-full w-[34px] z-3 ml-[-17px]" />
                        <img src={ person4 } alt="person" className="rounded-full w-[34px] z-4 ml-[-17px]" />
                        <img src={ person5 } alt="person" className="rounded-full w-[34px] z-5 ml-[-17px]" />
                    </div>
                    <img src={ whiteHeart } alt="heart" className="w-[27px]" />
                    <h2 className="font-normal text-2xl">33k Likes</h2>
                </div>
            </div>
            <img src={ wave } alt="wave" className="absolute rotate-[90deg] lg:rotate-0 scale-100 lg:scale-150 
                top-[-25%] lg:top-[15%] right-[-25%] lg:right-[10%]" 
            />
            <img src={ coverArtist } alt="Cover Artist" className="absolute hidden lg:block bottom-0 right-0 h-full" />
        </div>
    )
}

export default CuratedPlaylist