import React from "react";
import { useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import "../index.css";


const ReleasesCard = ({props}) => {
    let {releaseName, artist, image, albumId, type = "albums", setNowPlaying = () => {}} = props
    let ref = useRef(null)
    const handleClick = () => {
        let example = ref.current.getAttribute("data-click-store")
        setNowPlaying(JSON.parse(example))
    }
    return (
        <div className="flex-none ">
            { type !== "tracks"
                ? (
                    <div>
                        <Link to={`view-chart/${type}/#${albumId}`}>
                        <div className="flex flex-col flex-none gap-1 font-normal">
                            <img src={ image } alt="release-name" className="rounded-[20px] w-[150px] aspect-square" />
                            <p className="text-white text-xs">{releaseName}</p>
                            <p className="text-white text-xs opacity-50 whitespace-normal">{artist}</p>
                        </div>
                        </Link>
                        <Outlet />
                    </div>
                )
                : (
                    <div data-click-store={JSON.stringify({image, releaseName, artist})} ref={ref} onClick={handleClick}
                    className="flex flex-col flex-none gap-1 font-normal" >
                        <img src={ image } alt="release-name" className="rounded-[20px] w-[150px] aspect-square" />
                        <p className="text-white text-xs">{releaseName}</p>
                        <p className="text-white text-xs opacity-50 whitespace-normal">{artist}</p>
                    </div>
                )
            }
        </div>
    )
}

export default ReleasesCard