import React from "react";
import "../css/homepage.css"
import Header from "../../Header/components/Header.jsx"
import HeroBanner from "../components/banner.jsx"


function Homepage() {
  return (  
    <>
    <Header />
    <div className="homepage-container">
      <HeroBanner />
    </div>
    </>
  );
}

export default Homepage;