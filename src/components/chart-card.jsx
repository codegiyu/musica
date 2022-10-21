import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../index.css";
import heartOutline from "../img/heart-outline.svg";


const ChartCard = ({props}) => {
    let {chartName, artist, duration, image} = props
    return (
        <div className="bg-darkAlt block flex-none p-3 text-white w-4/5 rounded-[20px]">
            <Link to="view-chart"><div>
                <div className="flex justify-between items-start mb-3">
                    <img src={ image } alt="chart-img" className="aspect-square w-[99px]" />
                    <div className="flex items-center justify-center rounded-full aspect-square w-[37px] border border-[#FFFFFF11]">
                        <img src={ heartOutline } alt="chart-img" className="aspect-square w-[18px]" />
                    </div>
                </div>
                <h4 className="text-[17px] mb-1">{chartName}</h4>
                <p className="text-xs opacity-50 mb-6">{artist}</p>
                <p className="text-sm">{duration}</p>
            </div></Link> 
            <Outlet />
        </div>
    )
}

export default ChartCard