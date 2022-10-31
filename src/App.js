import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./pages/login";
import Layout from "./pages/layout";
import Home from "./pages/index";
import ViewChart from "./pages/view-chart";
import MyCollections from "./pages/my-collections";
// import BoxPage from "./pages/boxes";
import { setClientToken } from "./app/spotify/spotify";


export default function App() {
  let [token, setToken] = useState("")

  useEffect(() => {
    let savedToken = localStorage.getItem("token")
    let hash = window.location.hash;
    window.location.hash = ""

    if (!savedToken && hash) {
      let _token = hash.split("&")[0].split("=")[1]; 
      setToken(_token)
      localStorage.setItem("token", _token)
      setClientToken(_token)
    } else {
      setToken(savedToken)
      setClientToken(savedToken)
    }
  }, [])
  
  return token
    ? (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route exact path="view-chart/albums" element={<ViewChart />} />
            <Route exact path="view-chart/playlists" element={<ViewChart />} />
            <Route exact path="collections" element={<MyCollections />} />
            {/* <Route exact path="box" element={<BoxPage />} /> */}
            <Route exact path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      )
    : ( <Login /> )
}