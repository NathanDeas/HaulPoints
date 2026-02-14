import "../css/homepage.css"
import Header from "../../../components/Header/Header.jsx"
import Footer from "../../../components/Footer/Footer.jsx"
import HeroBanner from "../components/Banner.jsx"
import HowItWorks from "../components/HowItWorks.jsx"
import Partners from "../components/Partners.jsx"
import Testimonials from "../components/Testimonials.jsx";
import { useRef, useEffect } from "react"



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