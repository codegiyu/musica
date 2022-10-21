import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./pages/layout";
import Home from "./pages/index";
import ViewChart from "./pages/view-chart";
import MyCollections from "./pages/my-collections";
import chartImage from "./img/chartImage.svg";


let chartProps = {chartName: "Tomorrow's tunes", 
                  trackInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis", 
                  tracksNum: "64", 
                  totalDuration: "16 hrs+", 
                  image: `${chartImage}`
                }

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="view-chart" element={<ViewChart props={chartProps} />} />
          <Route exact path="collections" element={<MyCollections />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}