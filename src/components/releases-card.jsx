import React from "react";
// import { Outlet, Link } from "react-router-dom";
import "../index.css";


const ReleasesCard = ({props}) => {
    let {releaseName, image} = props
    return (
        <div className="flex flex-col flex-none gap-3">
            <img src={ image } alt="release-name" className="rounded-[20px] w-[150px] aspect-square" />
            <p className="text-white text-xs">{releaseName}</p>
        </div>
    )
}

export default ReleasesCard