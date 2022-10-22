import React from "react";
import "../index.css";
import Header from "../components/header";
import BottomPlay from "../components/bottom-play";
import redHeart from "../img/red-heart-small.svg";
import musicAdd from "../img/music-add-small.svg";
import trackImg from "../img/trackImg.svg";
import transparentPlayTriangle from "../img/play-triangle-transparent.svg";
import TrackCard from "../components/track-card";



let headerProps = {activePage: "home"}
let trackProps = {trackName: "Let me love you", artist: "Krisx", type: "Single", duration: "4:19", image: `${trackImg}`}

const ViewChart = ({props}) => {
    let {chartName, trackInfo, tracksNum, totalDuration, image} = props
    return (
        <div className="w-full min-h-screen bg-darkBackground relative font-quicksand overflow-x-hidden text-white">
            <img src={ image } alt="" className="absolute left-0 top-0 z-0 w-full scale-[200%] opacity-40" />
            <div className="w-full h-screen absolute inset-0 z-[0] bg-viewChartGradient"></div>
            <header className="container z-[3]">
                <Header props={ headerProps } />
            </header>
            <main className="container relative z-[3] pb-28">
                <img src={ image } alt="chart name" className="w-full aspect-[1.2] rounded-[25px]" />
                <div className="text-white py-4">
                    <h1 className="text-blueTint font-bold text-3xl my-2">{chartName}</h1>
                    <p className="text-sm mb-2">{trackInfo}</p>
                    <p className="">{tracksNum} songs - {totalDuration}</p>
                </div>
                <div className="w-full flex justify-between my-3">
                    <div className="bg-[#ffffff07] py-2 px-3 rounded-[25px] backdrop-blur-[5px] flex items-center gap-[8px]">
                        <div className="w-[13px] aspect-square rounded-full flex items-center justify-center bg-gold">
                            <img src={ transparentPlayTriangle } alt="" className="w-[6px] ml-[1px]" />
                        </div>
                        <p className="text-[10px]">Play all</p>
                    </div>
                    <div className="bg-[#ffffff07] py-2 px-3 rounded-[32px] backdrop-blur-[5px] flex items-center gap-[8px]">
                        <div className="">
                            <img src={ musicAdd } alt="" className="w-[13px]" />
                        </div>
                        <p className="text-[10px]">Add to collection</p>
                    </div>
                    <div className="bg-[#ffffff07] py-2 px-5 rounded-[25px] backdrop-blur-[5px] flex items-center gap-[8px]">
                        <div className="">
                            <img src={ redHeart } alt="" className="w-[13px]" />
                        </div>
                        <p className="text-[10px]">Like</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 my-8">
                    <TrackCard props={trackProps} />
                    <TrackCard props={trackProps} />
                    <TrackCard props={trackProps} />
                    <TrackCard props={trackProps} />
                    <TrackCard props={trackProps} />
                    <TrackCard props={trackProps} />
                    <TrackCard props={trackProps} />
                    <TrackCard props={trackProps} />
                </div>
                <div className="fixed bottom-0 left-0 container z-[999] bg-playBackground backdrop-blur-[15px]">
                    <BottomPlay />
                </div>
            </main>
        </div>
    )
}

export default ViewChart