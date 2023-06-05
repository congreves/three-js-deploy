// import Canvas from "./canvas";
// import Customizer from "./pages/Customizer";
// import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Works,
  StarsCanvas,
  Hero,
  Navbar,
  Experience,
  Carousel,
  Feedbacks,
} from "./components";
import { useRef } from "react";

function App() {
  const aboutSectionRef = useRef(null);

  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      scroll.scrollTo(aboutSectionRef.current.offsetTop);
    }
  };
  return (
    <BrowserRouter>
      <div className='relative z-0 font-nohemi'>
        <div className=''>
          <Navbar />
        </div>
        <Hero scrollToAboutSection={scrollToAboutSection}/>
        <About aboutSectionRef={aboutSectionRef}/>
        <Experience />
        <Works />

        {/* <Home />
        <Canvas />
        <Customizer /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Carousel />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
