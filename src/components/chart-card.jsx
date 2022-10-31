import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../index.css";
import heartOutline from "../img/heart-outline.svg";
import redHeart from "../img/red-heart-small.svg";


const ChartCard = ({props}) => {
    let {chartName, artist, duration, image, playlistId} = props
    let [isChartLiked, setIsChartLiked] = useState(false)

    const handleLikeChart = () => {
        setIsChartLiked(!isChartLiked)
    }
     
    return (
        <div className="bg-darkAlt block flex-none p-3 lg:p-4 text-white w-[70%] lg:w-full rounded-[20px]">
            
                <div>
                    <div className="flex justify-between items-start lg:items-center mb-3 lg:mb-0">
                        
                        <div className="flex flex-col lg:flex-row gap-3">
                            <Link to={`view-chart/playlists#${playlistId}`}>
                                <img src={ image } alt="chart-img" className="aspect-square w-[99px] lg:w-[63px] rounded-[10px]" />
                            </Link> 
                            <div className="flex flex-col lg:justify-between">
                                <Link to={`view-chart/playlists#${playlistId}`}>
                                    <h4 className="text-[17px] mb-1 lg:mb-0">{chartName}</h4>
                                </Link>
                                <p className="text-xs opacity-50 mb-6 lg:mb-0">{artist}</p>
                                <p className="text-sm lg:text-xs">{duration}</p>
                            </div>
                        </div>
                        <div onClick={handleLikeChart} 
                            className="flex items-center justify-center rounded-full aspect-square w-[37px] border border-[#FFFFFF11]"
                            >
                            { isChartLiked
                                ? <img src={ redHeart } alt="chart-img" className="aspect-square w-[18px]" />
                                : <img src={ heartOutline } alt="chart-img" className="aspect-square w-[18px]" />
                            }
                        </div>
                    </div>
                </div>
            <Outlet />
        </div>
    )
}

export default ChartCard