import React from "react";
import "../index.css";
import Header from "../components/header";
import Aside from "../components/aside";
import CuratedPlaylist from "../components/curated-playlist";
import ChartCard from "../components/chart-card";
import ReleasesCard from "../components/releases-card";
import BottomPlay from "../components/bottom-play";
import releasesImg from "../img/releasesImg.png";
import chartImg from "../img/chartImg.png";


let headerProps = {activePage: "home"}
let releaseProps = {releaseName: "Life in a bubble", artist: "The Van", image: `${releasesImg}`}
let chartProps = {chartName: "Golden age of 80s", artist: "Sean Swadder", duration: "2:34:45", image: `${chartImg}`}

const Home = () => {
    return (
        <div className="bg-darkBackground w-full min-h-screen font-quicksand overflow-x-hidden text-white">
            <header className="px-4 md:px-8 lg:px-12 xl:px-16 mx-auto">
                <Header props={ headerProps } />
            </header>
            <main className="px-4 md:px-8 lg:px-12 xl:px-16 relative pb-28 flex gap-6">
                <aside className="w-[60px] hidden lg:flex">
                    <Aside props={headerProps} />
                </aside>
                <section className="w-full lg:w-auto lg:flex-grow">
                    <section className="flex flex-col lg:flex-row gap-6 mb-12 relative">
                        <div className="w-full lg:w-[65%]">
                            <CuratedPlaylist />
                        </div>
                        <div className="top-charts lg:w-[33%] relative lg:absolute top-0 right-0 h-full">
                            <h3 className="font-bold text-xl mb-3">Top Charts</h3>
                            <div className="flex lg:flex-col w-full gap-4 lg:gap-2 lg:h-topChart overflow-x-auto lg:overflow-x-hidden 
                                lg:overflow-y-auto scrollbar-hide">
                                <ChartCard props={chartProps} />
                                <ChartCard props={chartProps} />
                                <ChartCard props={chartProps} />
                                <ChartCard props={chartProps} />
                                <ChartCard props={chartProps} />
                                <ChartCard props={chartProps} />
                                <ChartCard props={chartProps} />
                                <ChartCard props={chartProps} />
                                <ChartCard props={chartProps} />
                                <ChartCard props={chartProps} />
                            </div>
                        </div>
                    </section>
                    
                    <section className="new-releases mt-12 mb-0">
                        <h3 className="font-bold text-xl mb-3">New Releases</h3>
                        <div className="flex gap-4 lg:gap-12 overflow-x-auto scrollbar-hide">
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                        </div>
                    </section> 
                    <section className="new-releases mt-12 mb-0">
                        <h3 className="font-bold text-xl mb-3">Popular in your area</h3>
                        <div className="flex gap-4 lg:gap-12 overflow-x-auto scrollbar-hide">
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                            <ReleasesCard props={releaseProps} />
                        </div>
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

export default Home