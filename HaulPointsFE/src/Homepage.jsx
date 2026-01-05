import React from "react";
import "./homepage.css"
import Header from "./Header/components/Header.jsx"


function Homepage() {
  return (  
    <>
    <Header />
    <div className="homepage-container">
      <h1>Welcome to Haul Points!</h1>
      <p>Your one-stop solution for managing haul points efficiently.</p>
    </div>
    </>
  );
}

export default Homepage;