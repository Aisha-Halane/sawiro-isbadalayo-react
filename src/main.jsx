import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import ImageSlider from "./Components/ImageSlider";
import Footer from "./Components/Footer";


import "./index.css";

const root = document.getElementById("root");
createRoot(root).render(
  <div>
    <Header/>
    <ImageSlider/>
    <Footer/>

  </div>

)