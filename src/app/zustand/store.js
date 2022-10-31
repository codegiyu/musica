import create from "zustand";


const useStore = create((set) => ({
    nowPlaying: {
        image: "https://i.scdn.co/image/ab67616d0000485106013115ced3cd702e75a844",
        trackName: "Farifax Rain",
        artist: "Flows of Sleep",
    },
    playtime: 0,
    volume: 50,
    setNowPlaying: (obj) => {
        set(() => ({nowPlaying:{ image: obj.image, trackName: obj.trackName, artist: obj.artist }}))
    },
    setPlaytime: (num) => {
        return set(() => ({ playtime: num }))
    },
    setVolume: (num) => set(() => ({volume: num}))
}))

export default useStore