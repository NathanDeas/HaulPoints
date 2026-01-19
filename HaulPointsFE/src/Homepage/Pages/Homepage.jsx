import React from "react";
import "../css/homepage.css"
import Header from "../../Header/components/Header.jsx"
import HeroBanner from "../components/banner.jsx"
import HowItWorks from "../components/HowItWorks.jsx"
import Partners from "../components/Partners.jsx"



function Homepage() {

  return (  
    <>
    <Header />
    <div className="homepage-container">
      <HeroBanner />
      <HowItWorks />
      <Partners />
    </div>
    </>
  );
}

export default Homepage;