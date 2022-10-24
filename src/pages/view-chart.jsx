import React, { useState } from "react";
import "../index.css";
import Header from "../components/header";
import Aside from "../components/aside";
import BottomPlay from "../components/bottom-play";
import redHeart from "../img/red-heart-small.svg";
import heartOutline from "../img/heart-outline.svg";
import musicAdd from "../img/music-add-small.svg";
import trackImg from "../img/trackImg.svg";
import transparentPlayTriangle from "../img/play-triangle-transparent.svg";
import TrackCard from "../components/track-card";



let headerProps = {activePage: "home"}
let trackProps = {trackName: "Let me love you", artist: "Krisx", type: "Single", duration: "4:19", image: `${trackImg}`}


const ViewChart = ({props}) => {
    let {chartName, trackInfo, tracksNum, totalDuration, image} = props
    let [isChartLiked, setIsChartLiked] = useState(false)

    const handleLikeChart = () => {
        setIsChartLiked(!isChartLiked)
    }

    return (
        <div className="w-full min-h-screen bg-darkBackground relative font-quicksand overflow-x-hidden text-white">
            <div className="absolute left-0 top-0 z-0 w-full h-screen overflow-hidden">
                <img src={ image } alt="" className=" w-full scale-[200%] lg:scale-110 opacity-40" />
            </div>
            <div className="w-full h-screen absolute inset-0 z-[0] bg-viewChartGradient lg:bg-viewChartGradientLG"></div>
            <header className="px-4 md:px-8 lg:px-12 xl:px-16 z-[3]">
                <Header props={ headerProps } />
            </header>
            <main className="px-4 md:px-8 lg:px-12 xl:px-16 relative pb-0 flex gap-6">
                <aside className="w-[50px] hidden lg:flex">
                    <Aside props={headerProps} />
                </aside>
                <section className="w-full lg:w-auto flex-none lg:flex-grow relative z-[3] pb-0">
                    <section className="flex flex-col lg:flex-row lg:items-end lg:gap-8">
                        <img src={ image } alt="chart name" className="w-full lg:w-[285px] aspect-[1.2] lg:aspect-[0.95] rounded-[25px]" />
                        <div className="lg:w-[70%] lg:mb-6">
                            <div className="text-white py-4">
                                <h1 className="text-blueTint font-bold text-3xl my-2">{chartName}</h1>
                                <p className="text-sm mb-2">{trackInfo}</p>
                                <p className="">{tracksNum} songs - {totalDuration}</p>
                            </div>
                            <div className="w-full  flex justify-between lg:justify-start lg:gap-3 my-3">
                                <div className="bg-[#ffffff07] py-2 px-3 rounded-[25px] backdrop-blur-[5px] flex items-center gap-[8px]">
                                    <div className="w-[13px] lg:w-4 aspect-square rounded-full flex items-center justify-center bg-gold">
                                        <img src={ transparentPlayTriangle } alt="" className="w-[6px] ml-[1px]" />
                                    </div>
                                    <p className="text-[10px] lg:text-xs">Play all</p>
                                </div>
                                <div className="bg-[#ffffff07] py-2 px-3 rounded-[32px] backdrop-blur-[5px] flex items-center gap-[8px]">
                                    <div className="">
                                        <img src={ musicAdd } alt="" className="w-[13px] lg:w-4" />
                                    </div>
                                    <p className="text-[10px] lg:text-xs">Add to collection</p>
                                </div>
                                <div className="bg-[#ffffff07] py-2 px-5 lg:px-2 rounded-[25px] lg:rounded-full backdrop-blur-[5px]
                                     flex items-center gap-[8px]"  onClick={handleLikeChart}>
                                    <div className="">
                                        { isChartLiked 
                                            ? <img src={ redHeart } alt="" className="w-[13px] lg:w-4 aspect-square" />
                                            : <img src={ heartOutline } alt="" className="w-[13px] lg:w-4 aspect-square " />
                                        }
                                    </div>
                                    <p className="text-[10px] lg:text-xs block lg:hidden">Like</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="flex flex-col gap-3 my-8">
                        <TrackCard props={trackProps} />
                        <TrackCard props={trackProps} />
                        <TrackCard props={trackProps} />
                        <TrackCard props={trackProps} />
                        <TrackCard props={trackProps} />
                        <TrackCard props={trackProps} />
                        <TrackCard props={trackProps} />
                        <TrackCard props={trackProps} />
                    </section>
                    <section className="w-full fixed bottom-0 left-0 px-4 md:px-8 lg:px-12 xl:px-16 z-[999] 
                        bg-playBackground backdrop-blur-[15px] flex gap-4">
                        <div className="w-[50px] hidden lg:flex"></div>
                        <section className="w-auto flex-grow">
                            <BottomPlay />
                        </section>
                    </section>
                </section>
                
            </main>
        </div>
    )
}

export default ViewChart