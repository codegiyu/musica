import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../index.css";


const ReleasesCard = ({props}) => {
    let {releaseName, artist, image} = props
    return (
        <div className="flex-none">
            <Link to="view-chart">
                <div className="flex flex-col flex-none gap-1 font-normal">
                    <img src={ image } alt="release-name" className="rounded-[20px] w-[150px] aspect-square" />
                    <p className="text-white text-xs">{releaseName}</p>
                    <p className="text-white text-xs opacity-50">{artist}</p>
                </div>
            </Link>
            <Outlet />
        </div>
    )
}

export default ReleasesCard