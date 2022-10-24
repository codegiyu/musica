import React, { useState } from "react";
import "../index.css";
// import chartImage from "../img/chartImage.svg";
import Header from "../components/header";
import Aside from "../components/aside";
import CollectionCard from "../components/collection-card";
import collectionImg from "../img/collectionImg.svg";
import BottomPlay from "../components/bottom-play";
// import redHeart from "../img/red-heart-small.svg";
// import musicAdd from "../img/music-add-small.svg";
// import transparentPlayTriangle from "../img/play-triangle-transparent.svg";
// import TrackCard from "../components/track-card";


let headerProps = {activePage: "playlist"}
let collectionProps = {albumName: "Limits", artist: "John Watts", likes: 2310287, image: `${collectionImg}`}

const MyCollections = () => {

    let [activeTab, setActiveTab] = useState("collection");

    const setCollectionTab = () => setActiveTab("collection")
    const setLikesTab = () => setActiveTab("likes")

    return (
        <div className="w-full min-h-screen bg-darkBackground relative font-quicksand overflow-x-hidden text-white">
            <header className="px-4 md:px-8 lg:px-12 xl:px-16 z-[3]">
                <Header props={ headerProps } />
            </header>
            <main className="px-4 md:px-8 lg:px-12 xl:px-16 pb-0 flex gap-6">
                <aside className="w-[50px] hidden lg:flex">
                    <Aside props={headerProps} />
                </aside>
                <section className="w-full lg:w-auto flex-none lg:flex-grow relative z-[3] pb-20">
                    <div className="tab-btns flex justify-between lg:justify-start lg:gap-6 py-3">
                        <div onClick={ setCollectionTab } className={`py-2 w-[48%] lg:w-auto lg:px-8 flex justify-center rounded-[27px] 
                            ${activeTab === "collection" ? "bg-gold text-darkBackground" : "border border-[#EFEEE0] opacity-25"}`} 
                        >
                            <p className="text-sm">My Collection</p>
                        </div>
                        <div onClick={ setLikesTab } className={`py-2 w-[48%] lg:w-auto lg:px-8 flex justify-center rounded-[27px] 
                            ${activeTab === "likes" ? "bg-gold text-darkBackground" : "border border-[#EFEEE0] opacity-25"}`} 
                        >
                            <p className="text-sm">Likes</p>
                        </div>
                    </div>
                    <div className={`collection my-6 ${activeTab === "collection" ? "flex flex-col lg:flex-row gap-3 lg:gap-6" : "hidden"}`}>
                        <CollectionCard props={collectionProps} />
                        <CollectionCard props={collectionProps} />
                        <CollectionCard props={collectionProps} />
                    </div>
                    <div className={`likes my-6 ${activeTab === "likes" ? "flex flex-col gap-3" : "hidden"}`}>
                        
                    </div>
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

export default MyCollections