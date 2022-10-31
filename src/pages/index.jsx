import React, { useEffect, useState } from "react";
import "../index.css";
import useStore from "../app/zustand/store";
import Header from "../components/header";
import ErrorBoundary from "../components/error-boundary";
import Aside from "../components/aside";
import CuratedPlaylist from "../components/curated-playlist";
import ChartCard from "../components/chart-card";
import ReleasesCard from "../components/releases-card";
import BottomPlay from "../components/bottom-play";
// import axios from "axios";
// import useSWR from "swr";
import apiClient from "../app/spotify/spotify";
import { useNavigate } from "react-router-dom";


let headerProps = {activePage: "home"}


const Home = () => {
    let [releasesArr, setReleasesArr] = useState([])
    let [chartsArr, setChartsArr] = useState([])
    let [popularArr, setPopularArr] = useState([])
    let [recommendedArr, setRecommendedArr] = useState([])
    let setPlaytime = useStore((state) => state.setPlaytime)
    let setVolume = useStore((state) => state.setVolume)
    let setNowPlaying = useStore((state) => state.setNowPlaying)

    let bottomProps = {max: 100, setPlaytime, setVolume, setNowPlaying}
    let navigate = useNavigate()

    useEffect(() => {
        let endpoint0 = "browse/featured-playlists", modifiers0 = true, modifiersList0 = ["country=NG", "locale=en_US", "limit=10", `timestamp=${new Date().toISOString().replaceAll(":", "%3A")}`]
        let endpoint1 = "browse/new-releases", modifiers1 = false, modifiersList1 = ["country=NG", "limit=15"]
        let endpoint2 = "browse/categories/toplists/playlists", modifiers2 = true, modifiersList2 = ["country=NG"]
        let endpoint3 = "playlists/37i9dQZF1DWZCOSaet9tpB/tracks", modifiers3 = true, modifiersList3 = ["market=NG"]

        let extras0 = modifiers0 ? `?${modifiersList0.join("&")}` : ""
        let extras1 = modifiers1 ? `?${modifiersList1.join("&")}` : ""
        let extras2 = modifiers2 ? `?${modifiersList2.join("&")}` : ""
        let extras3 = modifiers3 ? `?${modifiersList3.join("&")}` : ""

        apiClient.get(`${endpoint0}${extras0}`).then(res => {
            const getDuration = () => {
                let secs = 10000 + Math.floor(Math.random() * 10000)
                return `${Math.floor(secs / 3600)}:${String(Math.floor(secs / 60) % 60).padStart(2,0)}:${String(secs%60).padStart(2, 0)}`
            }
            let arr = res.data.playlists.items.map(playlist => {
                return {
                    chartName: playlist.name, 
                    artist: playlist.owner["display_name"], 
                    duration: getDuration(), 
                    image: playlist.images[0]["url"], 
                    playlistId: playlist.id,
                }
            })
            setChartsArr(arr)
        })

        apiClient.get(`${endpoint1}${extras1}`).then(res => {
            setReleasesArr(res.data.albums.items)
        })
        .catch(err => {
            console.log(err)
            if (err.message === "Request failed with status code 401" || err.message === "The access token expired") {
                localStorage.removeItem("token")
                navigate("/login")
            }
        })

        apiClient.get(`${endpoint2}${extras2}`).then(res => {
            let arr = res.data.playlists.items.map(item => {
                return {
                    releaseName: item.name.length > 22 ? `${item.name.slice(0,22)}...` : item.name, 
                    artist: item.owner["display_name"],
                    image: item.images["0"].url, 
                    albumId: item.id,
                    type: "playlists"
                }
            })
            setRecommendedArr(arr)
        })
        .catch(err => {
            console.log(err)
            if (err.message === "Request failed with status code 401" || err.message === "The access token expired") {
                localStorage.removeItem("token")
                navigate("/login")
            }
        })

        apiClient.get(`${endpoint3}${extras3}`).then(res => {
            let arr = res.data.items.map(item => {
                return {
                    releaseName: item.track.name.length > 22 ? `${item.track.name.slice(0,22)}...` : item.track.name, 
                    artist: item.track.artists.map(artist => artist.name).join(", ").length > 22 ? `${item.track.artists.map(artist => artist.name).join(", ").slice(0, 22)}...` : item.track.artists.map(artist => artist.name).join(", "),
                    image: item.track.album.images["1"].url, 
                    albumId: item.track.id,
                    type: "tracks"
                }
            })
            setPopularArr(arr)
        })
        .catch(err => {
            console.log(err)
            if (err.message === "Request failed with status code 401" || err.message === "The access token expired") {
                localStorage.removeItem("token")
                navigate("/login")
            }
        })
    }, [navigate])

    const TopChartsList = () => chartsArr.map((item) => <ChartCard key={item.playlistId} props={item} />)

    const NewReleasesList = () => releasesArr.map((item, idx) => {
        let cardProps = {
            releaseName: item.name.length > 22 ? `${item.name.slice(0,22)}...` : item.name, 
            artist: item.artists.map(item => item.name).join(", ").length > 22 ? `${item.artists.map(item => item.name).join(", ").slice(0,22)}...` : item.artists.map(item => item.name).join(", "), 
            image: item.images["1"].url, 
            albumId: item.id,
        }
        return <ReleasesCard key={idx} props ={ cardProps } />
    })

    const RecommendedList = () => recommendedArr.map(item => <ReleasesCard key={item.albumId} props={item} />) 

    const PopularList = () => popularArr.map(item => <ReleasesCard key={item.albumId} props={{...item, setNowPlaying}} />) 
    
    return (
        <div className="bg-darkBackground w-screen min-h-screen font-quicksand overflow-x-hidden text-white">
            <header className="px-4 md:px-8 lg:px-12 xl:px-16 mx-auto">
                <Header props={ headerProps } />
            </header>
            <main className="w-screen px-4 md:px-8 lg:px-12 xl:px-16 relative pb-28 flex gap-6">
                <aside className="w-[50px] hidden lg:flex flex-none">
                    <Aside props={headerProps} />
                </aside>
                <section className="w-full lg:w-main">
                    <section className="flex flex-col lg:flex-row gap-6 mb-12 relative">
                        <div className="w-full lg:w-[65%]">
                            <CuratedPlaylist />
                        </div>
                        
                        <div className="top-charts lg:w-[33%] relative lg:absolute top-0 right-0 h-full">
                            <h3 className="font-bold text-xl mb-3">Top Charts</h3>
                            <div className="flex lg:flex-col w-full gap-4 lg:gap-2 lg:h-topChart overflow-x-auto lg:overflow-x-hidden 
                                lg:overflow-y-auto scrollbar-hide">
                                <ErrorBoundary>
                                    { <TopChartsList /> }
                                </ErrorBoundary>
                            </div>
                        </div>
                        
                    </section>
                    
                    <section className="new-releases mt-12 mb-0">
                        <h3 className="font-bold text-xl mb-3">New Releases</h3>
                        <div className="flex gap-4 lg:gap-4 overflow-x-auto scrollbar-hide">
                            <ErrorBoundary>
                                { <NewReleasesList />}
                            </ErrorBoundary>
                        </div>
                    </section> 
                    <section className="new-releases mt-12 mb-0">
                        <h3 className="font-bold text-xl mb-3">Popular tracks in your area</h3>
                        <div className="flex gap-4 lg:gap-4 overflow-x-auto scrollbar-hide">
                            <ErrorBoundary>
                                {<PopularList />}
                            </ErrorBoundary>
                        </div>
                    </section> 
                    <section className="new-releases mt-12 mb-0">
                        <h3 className="font-bold text-xl mb-3">Recommended for you</h3>
                        <div className="flex gap-4 lg:gap-4 overflow-x-auto scrollbar-hide">
                            <ErrorBoundary>
                                {<RecommendedList />}
                            </ErrorBoundary>
                        </div>
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

export default Home