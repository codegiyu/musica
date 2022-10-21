import React, { useState } from "react";
import "../index.css";
// import chartImage from "../img/chartImage.svg";
import Header from "../components/header";
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
            <header className="container z-[3]">
                <Header props={ headerProps } />
            </header>
            <main className="container">
                <div className="tab-btns flex justify-between py-3">
                    <div 
                        className={`py-2 w-[48%] flex justify-center rounded-[27px] ${activeTab === "collection" ? "bg-gold text-darkBackground" : "border border-[#EFEEE0] opacity-25"}`} 
                        onClick={ setCollectionTab }
                    >
                        <p className="text-sm">My Collection</p>
                    </div>
                    <div 
                        className={`py-2 w-[48%] flex justify-center rounded-[27px] ${activeTab === "likes" ? "bg-gold text-darkBackground" : "border border-[#EFEEE0] opacity-25"}`} 
                        onClick={ setLikesTab }
                    >
                        <p className="text-sm">Likes</p>
                    </div>
                </div>
                <div className={`collection my-6 ${activeTab === "collection" ? "flex flex-col gap-3" : "hidden"}`}>
                    <CollectionCard props={collectionProps} />
                    <CollectionCard props={collectionProps} />
                    <CollectionCard props={collectionProps} />
                </div>
                <div className={`likes my-6 ${activeTab === "likes" ? "flex flex-col gap-3" : "hidden"}`}>
                    
                </div>
                <div className="fixed bottom-0 left-0 container z-[999] bg-playBackground backdrop-blur-[15px]">
                    <BottomPlay />
                </div>
            </main>
        </div>
    )
}

export default MyCollections