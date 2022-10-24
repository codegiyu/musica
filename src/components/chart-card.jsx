import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../index.css";
import heartOutline from "../img/heart-outline.svg";


const ChartCard = ({props}) => {
    let {chartName, artist, duration, image} = props
    return (
        <div className="bg-darkAlt block flex-none p-3 lg:p-4 text-white w-[70%] lg:w-full rounded-[20px]">
            <Link to="view-chart">
                <div>
                    <div className="flex justify-between items-start lg:items-center mb-3 lg:mb-0">
                        <div className="flex flex-col lg:flex-row gap-3">
                            <img src={ image } alt="chart-img" className="aspect-square w-[99px] lg:w-[63px] rounded-[10px]" />
                            <div className="flex flex-col lg:justify-between">
                                <h4 className="text-[17px] mb-1 lg:mb-0">{chartName}</h4>
                                <p className="text-xs opacity-50 mb-6 lg:mb-0">{artist}</p>
                                <p className="text-sm lg:text-xs">{duration}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center rounded-full aspect-square w-[37px] border border-[#FFFFFF11]">
                            <img src={ heartOutline } alt="chart-img" className="aspect-square w-[18px]" />
                        </div>
                    </div>
                </div>
            </Link> 
            <Outlet />
        </div>
    )
}

export default ChartCard