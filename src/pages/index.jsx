import React from "react";
import "../index.css";
import Header from "../components/header";
import CuratedPlaylist from "../components/curated-playlist";
import ChartCard from "../components/chart-card";
import ReleasesCard from "../components/releases-card";
import BottomPlay from "../components/bottom-play";
import releasesImg from "../img/releasesImg.png";
import chartImg from "../img/chartImg.png";


let headerProps = {activePage: "home"}
let releaseProps = {releaseName: "Life in a bubble", image: `${releasesImg}`}
let chartProps = {chartname: "Golden age of 80s", artist: "Sean Swadder", duration: "2:34:45", image: `${chartImg}`}

const Home = () => {
    return (
        <div className="bg-darkBackground w-full min-h-screen font-quicksand overflow-x-hidden text-white">
            <header className="container">
                <Header props={ headerProps } />
            </header>
            <main className="container relative">
                <CuratedPlaylist />
                <div className="top-charts my-12 overflow-x-auto">
                    <h3 className="font-bold text-xl mb-3">Top Charts</h3>
                    <div className="flex gap-4 overflow-x-auto">
                        <ChartCard props={chartProps} />
                        <ChartCard props={chartProps} />
                    </div>
                </div>
                <div className="new-releases my-12 overflow-x-auto">
                    <h3 className="font-bold text-xl mb-3">New Releases</h3>
                    <div className="flex gap-4 overflow-x-auto">
                        <ReleasesCard props={releaseProps} />
                        <ReleasesCard props={releaseProps} />
                        <ReleasesCard props={releaseProps} />
                        <ReleasesCard props={releaseProps} />
                        <ReleasesCard props={releaseProps} />
                    </div>
                </div>
                <div className="fixed bottom-0 left-0 container z-[999] bg-playBackground backdrop-blur-[15px]">
                    <BottomPlay />
                </div>
            </main>
        </div>
    )
}

export default Home