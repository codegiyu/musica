import React from "react";
import "../index.css";
// import heartOutline from "../img/heart-outline.svg";
import dots from "../img/dots-vertical.svg";

const TrackCard = ({props}) => {
    let {trackName, artist, type, duration, image} = props
    return (
        <div className="bg-darkFaded backdrop-blur-[5px] rounded-[10px] py-2 px-2 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <img src={ image } alt="" className="w-[40px] aspect-square rounded-[5px]" />
                <div className="flex flex-col gap-1">
                    <p className="text-xs">{trackName} - {artist}</p>
                    <p className="text-[10px]">{type}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <img src={ dots } alt="" className="h-[14px]" />
                <p className="text-xs">{duration}</p>
            </div>
        </div>
    )
}

export default TrackCard