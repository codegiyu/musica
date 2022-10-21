import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../index.css";
import playCollection from "../img/play-collection.svg";


const CollectionCard = ({ props }) => {
    let {albumName, artist, likes, image} = props;
    let [imgHover, setimgHover] = useState(false)
    let imgHoverClasses = imgHover ? "scale-[120%]" : ""

    const formatLikes = () => {
        const zeros = str => str.length <= 3 ? 0 : 1 + zeros(str.slice(0, -3))
        let x = zeros(String(likes)), y = `${(likes / (1000 ** x)).toFixed(1)}`; 
        if (likes === 1) return `${likes} Like`
        if (!likes) return `No Likes`
        return /.0$/.test(y) 
            ? `${y.slice(0, -2)}${!x ? "" : x === 1 ? "k" : x === 2 ? "m" : "b"} Likes` 
            : `${y}${!x ? "" : x === 1 ? "k" : x === 2 ? "m" : "b"} Likes`
    }
    const hoverEffect = () => setimgHover(true)
    const cancelHoverEffect = () => setimgHover(false)

    return (
        <div>
            <Link to="../view-chart?code=1">
                <div className="flex w-full aspect-[1.5] relative rounded-[20px] overflow-hidden" 
                    onMouseEnter={ hoverEffect } onMouseLeave={ cancelHoverEffect }
                >
                    <img src={`${image}`} alt="release-name" 
                        className={`w-full aspect-square absolute z-0 inset-0 ${imgHoverClasses} transition-transform duration-300`} 
                    />
                    <div className="absolute z-1 bg-collectionCard w-full h-full"></div>
                    <div className={`z-2 absolute bottom-0 left-0 pl-5 pb-5 transition-transform duration-300 ${imgHover ? "translate-y-0" : "translate-y-12"}`}>
                        <p className="text-2xl">{ albumName }</p>
                        <p className="text-[10px] mb-5">{ artist }</p>
                        <p className="text-sm">{ formatLikes() }</p>
                    </div>
                    <div className={`z-2 absolute bottom-0 right-0 pr-5 pb-5 transition-opacity duration-300 ${imgHover ? "opacity-100" : "opacity-0"}`}>
                        <img src={ playCollection } alt="release-name" 
                            className={`w-[40px] aspect-square`} 
                        />
                    </div>
                </div>
            </Link>
            <Outlet />
        </div>
    )
}

export default CollectionCard