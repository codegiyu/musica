import React, { useState } from "react";
import "../index.css";
import heartOutline from "../img/heart-outline.svg";
import redHeart from "../img/red-heart-small.svg";
import dots from "../img/dots-vertical.svg";

const TrackCard = ({props}) => {
    let {trackName, artist, type, duration, image} = props
    let [isTrackLiked, setIsTrackLiked] = useState(false)
    const handleLikeTrack = () => { 
        setIsTrackLiked(!isTrackLiked)
    }

    return (
        <div className="bg-darkFaded backdrop-blur-[5px] rounded-[10px] py-2 px-2 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <img src={ image } alt="" className="w-[40px] aspect-square rounded-[5px]" />
                <div className="flex flex-col gap-1 lg:hidden">
                    <p className="text-xs">{trackName} - {artist}</p>
                    <p className="text-[10px]">{type}</p>
                </div>
                <div className="hidden lg:block" onClick={handleLikeTrack}>
                    { isTrackLiked 
                        ? <img src={ redHeart } alt="" className="w-[20px] aspect-square" />
                        : <img src={ heartOutline } alt="" className="w-[20px] aspect-square " />
                    }
                </div>
                <p className="text-xs hidden lg:block ml-16">{trackName} - {artist}</p>
            </div>
            
            <p className="text-[10px] hidden lg:block">{type}</p>
            <p className="text-xs hidden lg:block">{duration}</p>
            <div className="flex flex-col gap-2">
                <img src={ dots } alt="" className="h-[14px]" />
                <p className="text-xs lg:hidden">{duration}</p>
            </div>
        </div>
    )
}

export default TrackCard