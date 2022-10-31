import React, { useEffect, useState } from "react";
import "../index.css";
import useStore from "../app/zustand/store";
import Header from "../components/header";
import Aside from "../components/aside";
import ErrorBoundary from "../components/error-boundary";
import BottomPlay from "../components/bottom-play";
import redHeart from "../img/red-heart-small.svg";
import heartOutline from "../img/heart-outline.svg";
import musicAdd from "../img/music-add-small.svg";
import trackImg from "../img/trackImg.svg";
import transparentPlayTriangle from "../img/play-triangle-transparent.svg";
import TrackCard from "../components/track-card";
import { useNavigate } from "react-router-dom";
import apiClient from "../app/spotify/spotify";
import useRef from "react";



let headerProps = {activePage: "home"};
// let bottomProps = {max: 100};
// let trackProps = {trackName: "Let me love you", artist: "Krisx", type: "Single", duration: "4:19", image: `${trackImg}`}


const ViewChart = () => {
    // let {chartName, trackInfo, tracksNum, totalDuration, image} = props
    let [isChartLiked, setIsChartLiked] = useState(false)
    let [chartData, setChartData] = useState({})
    let [tracksArr, setTracksArr] = useState([])
    let [playtime, setPlaytime] = useStore((state) => [state.playtime, state.setPlaytime],)
    let [volume, setVolume] = useStore((state) => [state.volume, state.setVolume],)
    let [nowPlaying, setNowPlaying] = useStore((state) => [state.nowPlaying, state.setNowPlaying],)

    let bottomProps = {max: 100, setPlaytime, setVolume, setNowPlaying}

    const handleLikeChart = () => {
        setIsChartLiked(!isChartLiked)
    }

    let navigate = useNavigate()

    useEffect(() => {
        let reqType = window.location.pathname.split("/").find(item => item === "albums"|| item === "playlists")
        let reqId = window.location.hash.split("#")[1]
        
        let endpoint0 = `${reqType}/${reqId}`, modifiers0 = true, modifiersList0 = ["market=NG"]

        let extras = modifiers0 ? `?${modifiersList0.join("&")}` : ""

        const readableTime = num => {
            let secs = Math.floor(num / 1000)
            return Math.floor(secs / 3600) ?  `${Math.floor(secs / 3600)} hrs+`: `${(Math.floor(secs / 60) % 60)} mins+`
        }

        apiClient.get(`${endpoint0}${extras}`).then(res => {
            if (reqType === "albums") {
                
                let obj = {
                    chartName: res.data.name, 
                    trackInfo: res.data.label, 
                    tracksNum: res.data.total_tracks, 
                    totalDuration: readableTime(res.data.tracks.items.reduce((acc, curr) => acc + curr.duration_ms,0)), 
                    image: res.data.images[0].url,
                    smallImage: res.data.images[2].url
                }
                setChartData(obj)
            } else {
                let obj = {
                    chartName: res.data.name, 
                    trackInfo: res.data.description, 
                    tracksNum: res.data.tracks.items.length, 
                    totalDuration: readableTime(res.data.tracks.items.reduce((acc, curr) => acc + curr.track.duration_ms,0)), 
                    image: res.data.images[0].url,
                    smallImage: ""
                }
                setChartData(obj)
            }
            
        })
        .catch(err => {
            console.log(err)
            if (err.message === "Request failed with status code 401" || err.message === "The access token expired") {
                console.log(err.message)
                localStorage.removeItem("token")
                navigate("/login")
            }
        })
    }, [])

    useEffect(() => {
        let reqType = window.location.pathname.split("/").find(item => item === "albums"|| item === "playlists")
        let reqId = window.location.hash.split("#")[1]
        
        let endpoint1 = `${reqType}/${reqId}/tracks`, modifiers0 = true, modifiersList0 = ["market=NG"]

        let extras = modifiers0 ? `?${modifiersList0.join("&")}` : ""

        const readableShortTime = num => {
            let secs = Math.floor(num / 1000)
            return `${Math.floor(secs / 60)}:${String(secs%60).padStart(2, 0)}`
        }

        apiClient.get(`${endpoint1}${extras}`).then(res => {
            if (reqType === "albums") {
                let arr = res.data.items.map(item => {
                    return {
                        trackName: item.name, 
                        artist: item.artists.map(artist => artist.name).join(", ").length > 22 ? `${item.artists.map(artist => artist.name).join(", ").slice(0, 22)}...` : item.artists.map(artist => artist.name).join(", "), 
                        type: item.type,
                        duration: readableShortTime(item.duration_ms), 
                        image: chartData.smallImage,
                    }
                })
                setTracksArr(arr)
            } else {
                let arr = res.data.items.map(item => {
                    return {
                        trackName: item.track.name, 
                        artist: item.track.artists.map(artist => artist.name).join(", ").length > 22 ? `${item.track.artists.map(artist => artist.name).join(", ").slice(0, 22)}...` : item.track.artists.map(artist => artist.name).join(", "), 
                        type: item.track.type,
                        duration: readableShortTime(item.track.duration_ms), 
                        image: item.track.album.images["2"].url,
                    }
                })
                setTracksArr(arr)
            }
            
        })
        .catch(err => {
            console.log(err)
            if (err.message === "Request failed with status code 401" || err.message === "The access token expired") {
                console.log(err.message)
                localStorage.removeItem("token")
                navigate("/login")
            }
        })
    }, [chartData])

    
 

    const TracksList = () => tracksArr.map((item, idx) => <TrackCard key={idx} props={{...item, setNowPlaying}} />) 

    return (
        <div className="w-full min-h-screen bg-darkBackground relative font-quicksand overflow-x-hidden text-white">
            <div className="absolute left-0 top-0 z-0 w-full h-screen overflow-hidden">
                <img src={ chartData.image } alt="" className=" w-full scale-[200%] lg:scale-110 opacity-40" />
            </div>
            <div className="w-full h-screen absolute inset-0 z-[0] bg-viewChartGradient lg:bg-viewChartGradientLG"></div>
            <header className="px-4 md:px-8 lg:px-12 xl:px-16 z-[3]">
                <Header props={ headerProps } />
            </header>
            <main className="px-4 md:px-8 lg:px-12 xl:px-16 relative pb-0 flex gap-6">
                <aside className="w-[50px] hidden lg:flex">
                    <Aside props={headerProps} />
                </aside>
                <section className="w-full lg:w-auto flex-none lg:flex-grow relative z-[3] pb-20">
                    <section className="flex flex-col lg:flex-row lg:items-end lg:gap-8">
                        <img src={ chartData.image } alt="chart name" className="w-full lg:w-[285px] aspect-[1.2] lg:aspect-[0.95] rounded-[25px]" />
                        <div className="lg:w-[70%] lg:mb-6">
                            <div className="text-white py-4">
                                <h1 className="text-blueTint font-bold text-3xl my-2">{chartData.chartName}</h1>
                                <p className="text-sm mb-2">{chartData.trackInfo}</p>
                                <p className="">{chartData.tracksNum} songs - {chartData.totalDuration}</p>
                            </div>
                            <div className="w-full  flex justify-between lg:justify-start lg:gap-3 my-3">
                                <div className="bg-[#ffffff07] py-2 px-3 rounded-[25px] backdrop-blur-[5px] flex items-center gap-[8px]">
                                    <div className="w-[13px] lg:w-4 aspect-square rounded-full flex items-center justify-center bg-gold">
                                        <img src={ transparentPlayTriangle } alt="" className="w-[6px] ml-[1px]" />
                                    </div>
                                    <p className="text-[10px] lg:text-xs">Play all</p>
                                </div>
                                <div className="bg-[#ffffff07] py-2 px-3 rounded-[32px] backdrop-blur-[5px] flex items-center gap-[8px]">
                                    <div className="">
                                        <img src={ musicAdd } alt="" className="w-[13px] lg:w-4" />
                                    </div>
                                    <p className="text-[10px] lg:text-xs">Add to collection</p>
                                </div>
                                <div className="bg-[#ffffff07] py-2 px-5 lg:px-2 rounded-[25px] lg:rounded-full backdrop-blur-[5px]
                                     flex items-center gap-[8px]"  onClick={handleLikeChart}>
                                    <div className="">
                                        { isChartLiked 
                                            ? <img src={ redHeart } alt="" className="w-[13px] lg:w-4 aspect-square" />
                                            : <img src={ heartOutline } alt="" className="w-[13px] lg:w-4 aspect-square " />
                                        }
                                    </div>
                                    <p className="text-[10px] lg:text-xs block lg:hidden">Like</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="flex flex-col gap-3 my-8">
                        <ErrorBoundary>
                            {<TracksList />}
                        </ErrorBoundary>
                    </section>
                    <section className="w-full fixed bottom-0 left-0 px-4 md:px-8 lg:px-12 xl:px-16 z-[999] 
                        bg-playBackground backdrop-blur-[15px] flex gap-4">
                        <div className="w-[50px] hidden lg:flex"></div>
                        <section className="w-auto flex-grow">
                            <BottomPlay props={bottomProps} />
                        </section>
                    </section>
                </section>
                
            </main>
        </div>
    )
}

export default ViewChart