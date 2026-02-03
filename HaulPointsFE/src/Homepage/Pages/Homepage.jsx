import "../css/homepage.css"
import Header from "../../Header/components/Header.jsx"
import HeroBanner from "../components/banner.jsx"
import HowItWorks from "../components/HowItWorks.jsx"
import Partners from "../components/Partners.jsx"
import { useRef, useEffect } from "react"
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../../Footer/Components/Footer.jsx"



function Homepage() {
  const headerScrollTarget = useRef();
  const headerActionRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(!entries[0].isIntersecting) {
        headerActionRef.current.classList.add("scrolled")
      }
      else {
        headerActionRef.current.classList.remove("scrolled")
      }
    });
    observer.observe(headerScrollTarget.current);
    return () => observer.disconnect();

  }, [])

  return (  
    <>
    <div ref={headerScrollTarget} className="header-scroll-trigger"></div>
    <Header headerActionRef = {headerActionRef}/>
    <div className="homepage-container">
      <HeroBanner />
      < HowItWorks />
      <Partners />
      <Testimonials />
      <Footer />
    </div>
    </>
  );
}

export default Homepage;